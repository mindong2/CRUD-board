import React, { useEffect, useState } from "react";
import axios from "axios";
function List({ ContentList }) {
  const [text, setText] = useState("");
  useEffect(() => {
    let body = {
      text: "hello",
    };

    axios
      .post("/api/test", body)
      .then((res) => {
        console.log(res.data);
        setText(res.data.text);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h3>{text}</h3>
      {ContentList.map((v, i) => {
        return <div key={i}>{v}</div>;
      })}
    </>
  );
}

export default List;
