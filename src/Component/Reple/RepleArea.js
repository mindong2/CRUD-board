import React from "react";
import RepleUpload from "./RepleUpload";
import RepleList from "./RepleList";
const RepleArea = ({ postId }) => {
  return (
    <div>
      <RepleUpload postId={postId} />
      <RepleList />
    </div>
  );
};

export default RepleArea;
