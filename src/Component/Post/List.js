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
                  <div>
                    {post.image ? (
                      <div className="post-img">
                        <img src={post.image} alt="" />
                      </div>
                    ) : (
                      <div className="post-img-none">
                        <span>Mindong</span>
                      </div>
                    )}
                    <div className="padding-side">
                      <h4 style={{ fontWeight: "600" }}>{post.title} </h4>
                      <h5>
                        <Avatar
                          size="40"
                          round={true}
                          src={post.author.photoURL}
                          style={{
                            boxShadow: "0 0 0 1px #c3c3c3",
                            marginRight: "10px",
                          }}
                        ></Avatar>
                        {post.author.displayName}
                      </h5>
                      <p className="post-content">{post.content}</p>
                    </div>
                  </div>
                  <p className="timeout">
                    {timeout(post.createdAt, post.updatedAt)}
                  </p>
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
