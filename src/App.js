import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, clearUser } from "./Reducer/userSlice";
import firebase from "./firebase";
import Heading from "./Component/Heading";
import Upload from "./Component/Post/Upload";
import PostArea from "./Component/Post/PostArea";
import Edit from "./Component/Post/Edit";
import Login from "./Component/User/Login";
import Register from "./Component/User/Register";
import Mypage from "./Component/User/Mypage";
import Mainpage from "./Mainpage";
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
      <Heading />

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
    </div>
  );
};

export default App;
