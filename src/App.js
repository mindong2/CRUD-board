import React, { Suspense, useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Spinner } from "react-bootstrap";
import { loginUser, clearUser } from "./Reducer/userSlice";
import firebase from "./firebase";
import Heading from "./Component/Heading";
import GlobalStyle from "./Style/GlobalStyle";

// 첫 렌더링 시간이 너무 길어 lazy 로딩
const Upload = lazy(() => import("./Component/Post/Upload"));
const PostArea = lazy(() => import("./Component/Post/PostArea"));
const Edit = lazy(() => import("./Component/Post/Edit"));
const Login = lazy(() => import("./Component/User/Login"));
const Register = lazy(() => import("./Component/User/Register"));
const Mypage = lazy(() => import("./Component/User/Mypage"));
const Mainpage = lazy(() => import("./Component/Mainpage"));

const App = () => {
  const dispatch = useDispatch();

  // firebase 로그인 하지 않았을때 userInfo -> null 반대는 userInfo 보여줌
  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(clearUser());
      }
    });
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Heading />

      <Suspense fallback= {<Spinner/>}>
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/upload" element={<Upload />}></Route>

          <Route path="/post/:postNum" element={<PostArea />}></Route>
          <Route path="/edit/:postNum" element={<Edit />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          {/* <Route path="*" element={<div>404 알수없는 페이지</div>}></Route> */}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
