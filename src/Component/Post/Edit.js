import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { UploadDiv, UploadForm, UploadButtonDiv } from "../../Style/UploadCSS";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  let [postInfo, setPostInfo] = useState({});
  let [flag, setFlag] = useState(false);
  let params = useParams();

  const [title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const navigate = useNavigate();

  const onSubmit = () => {
    if (title === "" || Content === "") {
      return alert("모든 항목을 채워주세요!");
    }
    let body = {
      title: title,
      content: Content,
      postNum: params.postNum,
    };

    axios
      .post("/api/post/edit", body)
      .then((res) => {
        if (res.data.success) {
          alert("글 수정이 완료되었습니다.");
          navigate(`/post/${params.postNum}`);
        } else {
          alert("글 수정에 실패하였습니다. 관리자에게 문의해주세요.");
        }
      })
      .catch((err) => console.log(err));
  };

  //   디테일 (작성한 타이틀과 컨텐트 보여주는 부분)
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

  //   postInfo가 변화될때마다 불러온 타이틀, 컨텐트를 set 해주는 함수
  useEffect(() => {
    setTitle(postInfo.title);
    setContent(postInfo.content);
  }, [postInfo]);

  return (
    <UploadDiv>
      {flag ? (
        <UploadForm>
          <label htmlFor="title">제목</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
          />
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            value={Content}
            onChange={(e) => {
              setContent(e.currentTarget.value);
            }}
          />
          <UploadButtonDiv>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                if (window.confirm("정말 글 작성을 취소하시겠습니까?")) {
                  navigate(-1);
                }
              }}
            >
              취소
            </button>

            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              수정
            </button>
          </UploadButtonDiv>
        </UploadForm>
      ) : (
        <Spinner />
      )}
    </UploadDiv>
  );
};

export default Edit;
