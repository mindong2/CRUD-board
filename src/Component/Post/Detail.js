import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Avatar from "react-avatar";
import { DetailPageDiv } from "../../Style/DetailCSS";
const Detail = ({ postInfo }) => {
    let params = useParams();
    let navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const DeleteHandler = () => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            let body = {
                postNum: params.postNum,
            };

            axios
                .post("/api/post/delete", body)
                .then((res) => {
                    if (res.data.success) {
                        alert("게시글이 삭제되었습니다.");
                        navigate("/");
                    }
                })
                .catch(() => alert("게시글이 삭제에 실패했습니다."));
        }
    };

    useEffect(() => {
        console.log(postInfo);
    });

    return (
        <>
            <DetailPageDiv>
                <h1>{postInfo.title}</h1>
                <h3>
                    <Avatar size="40" round={true} src={postInfo.author.photoURL} style={{ boxShadow: "0 0 0 1px #c3c3c3" }}></Avatar>
                    {postInfo.author.displayName}
                </h3>
                {postInfo.image ? (
                    <img
                        // img등은 외부저장소에 저장 (네이버클라우드 연동)
                        src={postInfo.image}
                        alt=""
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                ) : null}
                <p>{postInfo.content}</p>
                {user.uid === postInfo.author.uid ? (
                    <div className="btnDiv">
                        <Link to={`/edit/${postInfo.postNum}`}>
                            <button className="edit">수정</button>
                        </Link>
                        <button className="delete" onClick={() => DeleteHandler()}>
                            삭제
                        </button>
                    </div>
                ) : null}
            </DetailPageDiv>
        </>
    );
};

export default Detail;
