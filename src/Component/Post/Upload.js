import React, { useState } from "react";
import { UploadDiv, UploadForm, UploadButtonDiv } from "../../Style/UploadCSS";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Upload = () => {
  // title -> 제목 / Content -> 내용
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
    };

    axios
      .post("/api/post/submit", body)
      .then((res) => {
        if (res.data.success) {
          alert("글 작성이 완료되었습니다.");
          navigate("/");
        } else {
          alert("글 작성에 실패하였습니다. 관리자에게 문의해주세요.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <UploadDiv>
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
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            제출
          </button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
};

export default Upload;
