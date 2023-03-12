import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import List from "./Component/Post/List";
import axios from "axios";
const Mainpage = () => {
  const [sort, setSort] = useState("최신순");
  const [postList, setPostList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [skip, setSkip] = useState(0);
  const [loadMore, setLoadMore] = useState(true);

  const getPostLoadMore = () => {
    let body = {
      sort,
      searchTerm,
      skip,
    };
    axios
      .post("/api/post/list", body)
      .then((res) => {
        if (res.data.success) {
          setPostList([...postList, ...res.data.postList]);
          setSkip(skip + res.data.postList.length);
          if (res.data.postList.length < 3) setLoadMore(false);
          else setLoadMore(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const searchList = () => {
    setSkip(0);
    let body = {
      sort,
      searchTerm,
      skip: 0,
    };
    axios
      .post("/api/post/list", body)
      .then((res) => {
        if (res.data.success) {
          setPostList([...res.data.postList]);
          setSkip(res.data.postList.length);

          if (res.data.postList.length < 3) setLoadMore(false);
          else setLoadMore(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const searchHandler = () => {
    searchList();
  };

  useEffect(() => {
    searchList();
  }, [sort]);

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="outline-secondary" title={sort}>
          {sort}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSort("최신순")}>
            최신순
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSort("인기순")}>
            인기순
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            searchHandler();
          }
        }}
      />

      <List postList={postList} />

      {loadMore && (
        <button
          type="button"
          onClick={() => {
            getPostLoadMore();
          }}
        >
          더보기
        </button>
      )}
    </div>
  );
};

export default Mainpage;
