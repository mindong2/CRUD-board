import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
const Detail = () => {
  let [postInfo, setPostInfo] = useState({});
  let [flag, setFlag] = useState(false);
  let params = useParams();
  let navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const DeleteHandler = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      let body = {
        postNum: params.postNum,
      };

      axios
        .post("/api/post/delete", body)
        .then((res) => {
          if (res.data.success) {
            alert("게시글이 삭제되었습니다.");
            navigate("/");
          }
        })
        .catch((err) => alert("게시글이 삭제에 실패했습니다."));
    }
  };

  useEffect(() => {
    let body = {
      postNum: params.postNum,
    };

    axios
      .post("/api/post/detail", body)
      .then((res) => {
        if (res.data.success) {
          setPostInfo(res.data.post);
          setFlag(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {flag ? (
        <div>
          <h1>{postInfo.title}</h1>
          {postInfo.image ? (
            <img
              // img등은 외부저장소에 저장 (네이버클라우드 연동)
              src={postInfo.image}
              alt=""
              style={{ maxWidth: "100%", height: "auto" }}
            />
          ) : null}
          <p>{postInfo.content}</p>
          {user.accessToken && (
            <div className="btnDiv">
              <Link to={`/edit/${postInfo.postNum}`}>
                <button className="edit">수정</button>
              </Link>
              <button className="delete" onClick={() => DeleteHandler()}>
                삭제
              </button>
            </div>
          )}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Detail;
