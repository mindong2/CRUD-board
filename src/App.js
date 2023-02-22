import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Heading from "./Component/Heading";
import List from "./Component/Post/List";
import Upload from "./Component/Post/Upload";

const App = () => {
  const [ContentList, setContentList] = useState([]);

  return (
    <div className="App">
      <Heading />

      <Routes>
        <Route
          path="/"
          element={
            <List ContentList={ContentList} setContentList={setContentList} />
          }
        ></Route>
        <Route
          path="/upload"
          element={
            <Upload ContentList={ContentList} setContentList={setContentList} />
          }
        ></Route>
        {/* <Route path="*" element={<div>404 알수없는 페이지</div>}></Route> */}
      </Routes>
    </div>
  );
};

export default App;
