import React from "react";
import LoginInputDiv from "../../Style/LoginCSS";

const register = () => {
  return (
    <LoginInputDiv>
      <form>
        <div className="input_box">
          <label htmlFor="name">이름</label>
          <input type="text" id="name" />
        </div>
        <div className="input_box">
          <label htmlFor="email">이메일</label>
          <input type="email" />
        </div>
        <div className="input_box">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" />
        </div>
        <div className="input_box">
          <label htmlFor="password_confirm">비밀번호 확인</label>
          <input type="password" id="password_confirm" />
        </div>
        <div className="btn_area">
          <button>회원가입</button>
        </div>
      </form>
    </LoginInputDiv>
  );
};

export default register;
