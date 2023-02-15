import React, { useState } from "react";
import { UploadDiv, UploadForm, UploadButtonDiv } from "../Style/UploadCSS";
function Upload({ ContentList, setContentList }) {
  const [Content, setContent] = useState("");

  const onSubmit = (item) => {
    let copy = [...ContentList];
    copy.push(item);
    setContentList([...copy]);
    setContent("");
  };
  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="title">제목</label>
        <input
          id="title"
          type="text"
          value={Content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          type="text"
          value={Content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <UploadButtonDiv>
          <button
            onClick={() => {
              onSubmit(Content);
            }}
          >
            제출
          </button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
}

export default Upload;
