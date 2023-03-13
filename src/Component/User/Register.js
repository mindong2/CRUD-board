import React, { useState } from "react";
import LoginInputDiv from "../../Style/LoginCSS";
import firebase from "../../firebase";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PWConfirm, setPWConfirm] = useState("");
  const [Flag, setFlag] = useState(false);
  const [nameChk, setNameChk] = useState(false);
  const [nameChkResult, setNameChkResult] = useState("");
  const navigate = useNavigate();

  const registerFn = async (e) => {
    e.preventDefault();
    setFlag(true);
    if (!(Name && Email && Password && PWConfirm)) {
      return alert("모든 값을 채워주세요!");
    }
    if (Password !== PWConfirm) {
      return alert("비밀번호와 비밀번호 확인 값은 같아야 합니다.");
    }
    if (!nameChk) {
      return alert("닉네임 중복검사를 해주세요");
    }
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Password);

    await createdUser.user.updateProfile({
      displayName: Name,
      photoURL:
        "https://kr.object.ncloudstorage.com/react-crud/post/profile.png",
    });

    let body = {
      email: createdUser.user.multiFactor.user.email,
      displayName: createdUser.user.multiFactor.user.displayName,
      uid: createdUser.user.multiFactor.user.uid,
      photoURL:
        "https://kr.object.ncloudstorage.com/react-crud/post/profile.png",
    };
    axios.post("/api/user/register", body).then((res) => {
      setFlag(false);
      if (res.data.success) {
        alert("회원가입이 완료되었습니다!");
      } else {
        return alert("회원가입이 실패하였습니다.");
      }
    });
  };

  const nameChkFn = (e) => {
    e.preventDefault();
    if (!Name) {
      alert("닉네임을 입력해주세요.");
    }
    let body = {
      displayName: Name,
    };
    axios
      .post("/api/user/nameChk", body)
      .then((res) => {
        if (res.data.success) {
          if (res.data.checkVal) {
            setNameChkResult("사용가능한 닉네임입니다.");
            setNameChk(true);
          } else {
            setNameChkResult("이미 사용중인 닉네임입니다.");
          }
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <LoginInputDiv>
      <form>
        <div className="input_box">
          <label htmlFor="name">닉네임</label>
          <input
            type="text"
            id="name"
            value={Name}
            readOnly={nameChk}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
          <div className="btn_area">
            <button onClick={(e) => nameChkFn(e)} style={{ width: "100%" }}>
              닉네임 중복검사
            </button>
          </div>
          <p className="NameChkResult">{nameChkResult}</p>
        </div>
        <div className="input_box">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            value={Email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
        </div>
        <div className="input_box">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={Password}
            minLength={8}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
        </div>
        <div className="input_box">
          <label htmlFor="password_confirm">비밀번호 확인</label>
          <input
            type="password"
            id="password_confirm"
            value={PWConfirm}
            minLength={8}
            onChange={(e) => {
              setPWConfirm(e.currentTarget.value);
            }}
          />
        </div>
        <div className="btn_area">
          <button disabled={Flag} onClick={(e) => registerFn(e)}>
            회원가입
          </button>
        </div>
      </form>
    </LoginInputDiv>
  );
};

export default Register;
