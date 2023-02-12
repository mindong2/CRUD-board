import React, { useState } from "react";

function Test() {
  const [Content, setContent] = useState("");
  const [ContentList, setContentList] = useState([]);

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

      {ContentList.map((v, i) => {
        return <div key={i}>{v}</div>;
      })}
    </>
  );
}

export default Test;
