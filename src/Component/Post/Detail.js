import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const Detail = () => {
  let [postInfo, setPostInfo] = useState({});
  let [flag, setFlag] = useState(false);
  let params = useParams();

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
        <div>
          {postInfo.title} {postInfo.content}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Detail;
