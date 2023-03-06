import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Detail from "./Detail";
import RepleArea from "../Reple/RepleArea";

const PostArea = () => {
  const params = useParams();
  let [postInfo, setPostInfo] = useState({});
  let [flag, setFlag] = useState(false);
  useEffect(() => {
    let body = {
      postNum: params.postNum,
    };

    axios
      .post("/api/post/detail", body)
      .then((res) => {
        if (res.data.success) {
          setPostInfo(res.data.post);
          setFlag(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {flag ? (
        <>
          <Detail postInfo={postInfo} />
          <RepleArea postId={postInfo._id} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default PostArea;
