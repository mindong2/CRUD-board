import React from "react";
import { Link } from "react-router-dom";
import { ListParent } from "../../Style/ListCSS";
import Avatar from "react-avatar";
import moment from "moment";
import "moment/locale/ko";
const List = ({ postList }) => {
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
                  <h3>{post.title} </h3>
                  <h5>
                    <Avatar
                      size="50"
                      round={true}
                      src={post.author.photoURL}
                      style={{
                        border: "1px solid #e3e3e3",
                        marginRight: "10px",
                      }}
                    ></Avatar>
                    {post.author.displayName}
                  </h5>
                  <p>{post.content}</p>
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
