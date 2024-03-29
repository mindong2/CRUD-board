import React, { useState, useEffect } from "react";
import { UploadDiv, UploadForm, UploadButtonDiv } from "../../Style/UploadCSS";
import { useNavigate } from "react-router-dom";
import ImagesUpload from "./ImageUpload";
import axios from "axios";
import { useSelector } from "react-redux";
const Upload = () => {
    // title -> 제목 / Content -> 내용
    const [title, setTitle] = useState("");
    const [Content, setContent] = useState("");
    const [Image, setImage] = useState("");
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (user.isLoading && !user.accessToken) {
            alert("로그인한 회원만 글을 작성할 수 있습니다.");
            navigate("/login");
        }
    }, [user]);

    const onSubmit = () => {
        if (title === "" || Content === "") {
            return alert("모든 항목을 채워주세요!");
        }
        let body = {
            title: title,
            content: Content,
            image: Image,
            uid: user.uid,
        };

        axios
            .post("/api/post/submit", body)
            .then((res) => {
                if (res.data.success) {
                    alert("글 작성이 완료되었습니다.");
                    navigate("/");
                } else {
                    alert("글 작성에 실패하였습니다. 관리자에게 문의해주세요.");
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <UploadDiv style={{ width: "90%", margin: "0 auto" }}>
            <UploadForm>
                <label htmlFor="title">제목</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.currentTarget.value);
                    }}
                />
                <ImagesUpload setImage={setImage} />
                <label htmlFor="content">내용</label>
                <textarea
                    id="content"
                    value={Content}
                    style={{ height: "35rem" }}
                    onChange={(e) => {
                        setContent(e.currentTarget.value);
                    }}
                />
                <UploadButtonDiv>
                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            onSubmit();
                        }}
                    >
                        제출
                    </button>
                </UploadButtonDiv>
            </UploadForm>
        </UploadDiv>
    );
};

export default Upload;
