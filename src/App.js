import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Heading from "./Component/Heading";
import List from "./Component/List";
import Upload from "./Component/Upload";

function App() {
  const [ContentList, setContentList] = useState([]);

  return (
    <div className="App">
      <Heading />

      <Routes>
        <Route
          path="/list"
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
}

export default App;
