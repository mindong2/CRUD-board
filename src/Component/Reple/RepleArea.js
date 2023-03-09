import React from "react";
import RepleUpload from "./RepleUpload";
import RepleList from "./RepleList";
import { useSelector } from "react-redux";
const RepleArea = ({ postId }) => {
    const user = useSelector((state) => state.user);
    return (
        <div>
            {user.accessToken && <RepleUpload postId={postId} />}
            <RepleList postId={postId} />
        </div>
    );
};

export default RepleArea;
