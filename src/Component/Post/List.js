import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ListParent } from "../../Style/ListCSS";
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
      <ListParent>
        <ul>
          {postList.map((post, idx) => {
            return (
              <li key={idx}>
                <Link to={`/detail/${post.postNum}`}>
                  <h4>{post.postNum}</h4>
                  <h3>제목 : {post.title} </h3>
                  <p>내용 : {post.content}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </ListParent>
    </>
  );
};

export default List;
