import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ListParent } from "../../Style/ListCSS";
import Avatar from "react-avatar";
import moment from "moment";
import "moment/locale/ko";
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

  const timeout = (create, update) => {
    if (create !== update) {
      return moment(update).format(`YYYY.MM.DD (dd) HH:mm (수정됨)`);
    } else {
      return moment(create).format(`YYYY.MM.DD (dd) HH:mm`);
    }
  };

  return (
    <>
      <ListParent>
        <ul>
          {postList.map((post, idx) => {
            return (
              <li key={idx}>
                <Link to={`/post/${post.postNum}`}>
                  <h3>제목 : {post.title} </h3>
                  <h5>
                    작성자:
                    <Avatar
                      size="20"
                      round={true}
                      src={post.author.photoURL}
                      style={{ border: "1px solid #e3e3e3" }}
                    ></Avatar>
                    {post.author.displayName}
                  </h5>
                  <p>내용 : {post.content}</p>
                  <p>{timeout(post.createdAt, post.updatedAt)}</p>
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
