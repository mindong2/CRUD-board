import React, { useEffect, useState } from "react";
import LoginInputDiv from "../../Style/LoginCSS";
import firebase from "../../firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [errorMSG, setErrMSG] = useState("");
    const navigate = useNavigate();
    const LoginFn = async (e) => {
        e.preventDefault();
        if (!(Email && Password)) {
            return alert("모든 값을 채워주세요.");
        }

        try {
            await firebase.auth().signInWithEmailAndPassword(Email, Password);
            navigate("/");
        } catch (err) {
            console.log(err.code);
            if (err.code === "auth/user-not-found") {
                setErrMSG("존재하지않는 이메일입니다.");
            } else if (err.code === "auth/wrong-password") {
                setErrMSG("비밀번호가 일치하지 않습니다.");
            } else {
                setErrMSG("로그인에 실패하였습니다.");
            }
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setErrMSG("");
        }, 3000);
        return () => {
            clearTimeout();
        };
    }, [errorMSG]);

    return (
        <LoginInputDiv>
            <form>
                <div className="input_box">
                    <label htmlFor="email">이메일</label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.currentTarget.value)} />
                </div>
                <div className="input_box">
                    <label htmlFor="password">비밀번호</label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.currentTarget.value)} />
                </div>
                <div className="btn_area">
                    <button onClick={(e) => LoginFn(e)} type="submit">
                        로그인
                    </button>
                    <button onClick={() => navigate("/register")} type="button">
                        회원가입
                    </button>
                </div>
                {errorMSG !== "" && <p>{errorMSG}</p>}
            </form>
        </LoginInputDiv>
    );
};

export default Login;
