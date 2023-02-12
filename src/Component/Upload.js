import React, { useState } from "react";

function Upload({ ContentList, setContentList }) {
  const [Content, setContent] = useState("");

  const onSubmit = (item) => {
    let copy = [...ContentList];
    copy.push(item);
    setContentList([...copy]);
    setContent("");
  };
  return (
    <>
      <input
        type="text"
        value={Content}
        onChange={(e) => {
          setContent(e.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          onSubmit(Content);
        }}
      >
        제출
      </button>
    </>
  );
}

export default Upload;
