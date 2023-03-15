import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { UploadDiv, UploadForm, UploadButtonDiv } from "../../Style/UploadCSS";
import Avatar from "react-avatar";
import { RepleListDiv } from "../../Style/RepleCSS";
import moment from "moment";
import "moment/locale/ko";

const RepleContent = ({ repleItem }) => {
    const ref = useRef();
    const user = useSelector((state) => state.user);
    const [modalFlag, setModalFlag] = useState(false);
    const [updateFlag, setUpdateFlag] = useState(false);
    const [reple, setReple] = useState(repleItem.reple);

    const timeout = (create, update) => {
        if (create !== update) {
            return moment(update).format(`YYYY.MM.DD (dd) HH:mm (수정됨)`);
        } else {
            return moment(create).format(`YYYY.MM.DD (dd) HH:mm`);
        }
    };

    // useOutsideClick (본인 외 다른곳 클릭 시 모달 제거)
    useOnClickOutside(ref, () => setModalFlag(false));

    function useOnClickOutside(ref, handler) {
        useEffect(() => {
            const listener = (event) => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        }, [ref, handler]);
    }

    // 삭제
    const deleteReple = (e, id) => {
        e.preventDefault();
        setModalFlag(false);
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            const body = {
                listId: id,
            };
            axios.post("/api/reple/delete", body).then((res) => {
                if (res.data.success) {
                    alert("삭제가 완료되었습니다.");
                    window.location.reload();
                } else {
                    alert("삭제를 실패하였습니다.");
                }
            });
        }
    };

    const updateReple = (e, id) => {
        e.preventDefault();
        if (window.confirm("정말로 수정하시겠습니까?")) {
            const body = {
                listId: id,
                reple,
                postId: repleItem.postId,
            };
            axios.post("/api/reple/update", body).then((res) => {
                if (res.data.success) {
                    alert("수정이 완료되었습니다.");
                    window.location.reload();
                } else {
                    alert("수정을 실패하였습니다.");
                }
            });
        }
    };

    const modalFlagFn = () => {
        setModalFlag(true);
    };

    return (
        <RepleListDiv>
            <h5>
                <Avatar size="50" round={true} src={repleItem.author.photoURL} style={{ marginRight: "1rem", boxShadow: "0 0 0 1px #c3c3c3" }}></Avatar>
                <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", flex: "1" }}>
                    <div className="reple-info">
                        {repleItem.author.displayName}
                        <b>{timeout(repleItem.createdAt, repleItem.updatedAt)}</b>
                    </div>
                    {repleItem.author.uid === user.uid ? (
                        <div className="update-toggle">
                            <span onClick={() => modalFlagFn()} style={{ cursor: "pointer", letterSpacing: "-1.3rem", color: "#888" }}>
                                ㆍㆍㆍ
                            </span>
                            {modalFlag && (
                                <div className="modalDiv" ref={ref}>
                                    <button
                                        onClick={() => {
                                            setUpdateFlag(true);
                                            setModalFlag(false);
                                        }}
                                    >
                                        수정
                                    </button>
                                    <button onClick={(e) => deleteReple(e, repleItem._id)}>삭제</button>
                                </div>
                            )}
                        </div>
                    ) : null}
                </div>
            </h5>
            {updateFlag ? (
                <UploadDiv>
                    <UploadForm style={{ width: "100%" }}>
                        <textarea
                            id="reple"
                            value={reple}
                            style={{ height: "15rem" }}
                            onChange={(e) => {
                                setReple(e.currentTarget.value);
                            }}
                        />
                        <UploadButtonDiv>
                            <button onClick={(e) => updateReple(e, repleItem._id)} type="submit">
                                수정
                            </button>
                            <button onClick={() => setUpdateFlag(false)} style={{ marginLeft: "10px" }} type="button">
                                취소
                            </button>
                        </UploadButtonDiv>
                    </UploadForm>
                </UploadDiv>
            ) : (
                <p>{repleItem.reple}</p>
            )}
        </RepleListDiv>
    );
};

export default RepleContent;
