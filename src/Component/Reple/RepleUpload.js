import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const RepleUpload = ({ postId }) => {
  const [Reple, setReple] = useState("");
  const user = useSelector((state) => state.user);
  const uploadHandler = (e) => {
    e.preventDefault();

    if (!Reple) {
      return alert("댓글을 작성해주세요.");
    }

    let body = {
      reple: Reple,
      uid: user.uid,
      postId: postId,
    };

    axios.post("/api/reple/submit", body).then((res) => {
      setReple("");
      if (res.data.success) {
        alert("댓글작성이 완료되었습니다");
      } else {
        alert("댓글작성이 실패하였습니다.");
      }
    });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => setReple(e.currentTarget.value)}
          value={Reple}
        />
        <button onClick={(e) => uploadHandler(e)}>등록</button>
      </form>
    </div>
  );
};

export default RepleUpload;
