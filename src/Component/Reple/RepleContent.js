import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { UploadDiv, UploadForm, UploadButtonDiv } from "../../Style/UploadCSS";
import Avatar from "react-avatar";
const RepleContent = ({ repleItem }) => {
  const user = useSelector((state) => state.user);
  const [modalFlag, setModalFlag] = useState(false);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [reple, setReple] = useState(repleItem.reple);
  // useOutsideClick 추후 작업
  // 삭제
  const deleteReple = (e, id) => {
    e.preventDefault();
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
    <div>
      <h5>
        닉네임:
        <Avatar size="20" round={true} src={repleItem.author.photoURL}></Avatar>
        {repleItem.author.displayName}
      </h5>
      {updateFlag ? (
        <UploadDiv>
          <UploadForm>
            <textarea
              id="reple"
              value={reple}
              onChange={(e) => {
                setReple(e.currentTarget.value);
              }}
            />
            <UploadButtonDiv>
              <button
                onClick={(e) => updateReple(e, repleItem._id)}
                type="submit"
              >
                수정
              </button>
              <button
                onClick={() => setUpdateFlag(false)}
                style={{ marginLeft: "10px" }}
                type="button"
              >
                취소
              </button>
            </UploadButtonDiv>
          </UploadForm>
        </UploadDiv>
      ) : (
        <p>{repleItem.reple}</p>
      )}

      {repleItem.author.uid === user.uid ? (
        <>
          <span onClick={() => modalFlagFn()}>***</span>
          {modalFlag && (
            <div className="modalDiv">
              <button onClick={() => setUpdateFlag(true)}>수정</button>
              <button onClick={(e) => deleteReple(e, repleItem._id)}>
                삭제
              </button>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

export default RepleContent;
