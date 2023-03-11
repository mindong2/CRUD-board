import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "react-avatar";
import axios from "axios";
import firebase from "../../firebase";
const Mypage = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [updateImg, setUpdateImg] = useState("");
  useEffect(() => {
    if (user.isLoading && !user.accessToken) {
      navigate("/");
    } else {
      setUpdateImg(user.photoURL);
    }
  }, [user]);

  const fileUpload = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios
      .post("/api/user/mypage/img", formData)
      .then((res) => {
        setUpdateImg(res.data.filepath);
      })
      .catch((err) => console.log(err));
  };

  const updateSubmit = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().currentUser.updateProfile({
        photoURL: updateImg,
      });
    } catch (err) {
      return alert("프로필 저장에 실패했습니다.");
    }

    let body = {
      photoURL: updateImg,
      uid: user.uid,
    };

    axios
      .post("/api/user/mypage/update", body)
      .then((res) => {
        if (res.data.success) {
          alert("변경이 완료되었습니다.");
          window.location.reload();
        } else {
          alert("변경에 실패하였습니다. 관리자에게 문의해주세요.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form>
        <label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              fileUpload(e);
            }}
            style={{ display: "none" }}
          />
          <Avatar
            size="100"
            round={true}
            src={updateImg}
            style={{ border: "1px solid #e3e3e3", cursor: "pointer" }}
          ></Avatar>
        </label>
        <h2>{user.displayName}</h2>
        <button
          type="submit"
          onClick={(e) => {
            updateSubmit(e);
          }}
        >
          수정
        </button>
      </form>
    </div>
  );
};

export default Mypage;
