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

    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Password);

    await createdUser.user.updateProfile({
      displayName: Name,
    });
    console.log(createdUser.user);
    let body = {
      email: createdUser.user.multiFactor.user.email,
      displayName: createdUser.user.multiFactor.user.displayName,
      uid: createdUser.user.multiFactor.user.uid,
    };
    axios.post("/api/user/register", body).then((res) => {
      setFlag(false);
      if (res.data.success) {
        alert("회원가입이 완료되었습니다!");
        navigate("/login");
      } else {
        return alert("회원가입이 실패하였습니다.");
      }
    });
  };

  return (
    <LoginInputDiv>
      <form>
        <div className="input_box">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            value={Name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
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
