import axios from "axios";
import React, { useEffect, useState } from "react";

const List = () => {
  let [postList, setPostList] = useState([]);
  useEffect(() => {
    axios
      .post("/api/post/list")
      .then((res) => {
        if (res.data.success) {
          setPostList([...res.data.postList]);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {postList.map((post, i) => {
        return (
          <div key={i}>
            <h3>제목 : {post.title} </h3>
            <p>내용 : {post.content}</p>
          </div>
        );
      })}
    </>
  );
};

export default List;
