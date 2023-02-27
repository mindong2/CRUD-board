import React from "react";
import LoginInputDiv from "../../Style/LoginCSS";
const login = () => {
  return (
    <LoginInputDiv>
      <form>
        <div className="input_box">
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" />
        </div>
        <div className="input_box">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" />
        </div>
        <div className="btn_area">
          <button>회원가입</button>
          <button>로그인</button>
        </div>
      </form>
    </LoginInputDiv>
  );
};

export default login;
