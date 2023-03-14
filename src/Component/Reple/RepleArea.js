import React from "react";
import { useNavigate } from "react-router-dom";
import RepleUpload from "./RepleUpload";
import RepleList from "./RepleList";
import { useSelector } from "react-redux";
import { UploadButtonDiv } from "../../Style/UploadCSS";
import { RepleDiv } from "../../Style/RepleCSS";
const RepleArea = ({ postId }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <RepleDiv>
      {user.accessToken && <RepleUpload postId={postId} />}
      <RepleList postId={postId} />
      <UploadButtonDiv>
        <button
          onClick={() => {
            navigate(-1);
          }}
          type="button"
        >
          목록으로
        </button>
      </UploadButtonDiv>
    </RepleDiv>
  );
};

export default RepleArea;
