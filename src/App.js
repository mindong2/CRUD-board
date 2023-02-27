import React from "react";
import { Routes, Route } from "react-router-dom";
import Heading from "./Component/Heading";
import List from "./Component/Post/List";
import Upload from "./Component/Post/Upload";
import Detail from "./Component/Post/Detail";
import Edit from "./Component/Post/Edit";
import Login from "./Component/User/Login";
import Register from "./Component/User/Register";
const App = () => {
  return (
    <div className="App">
      <Heading />

      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="/upload" element={<Upload />}></Route>

        <Route path="/detail/:postNum" element={<Detail />}></Route>
        <Route path="/edit/:postNum" element={<Edit />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        {/* <Route path="*" element={<div>404 알수없는 페이지</div>}></Route> */}
      </Routes>
    </div>
  );
};

export default App;
