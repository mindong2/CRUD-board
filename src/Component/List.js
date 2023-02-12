import React from "react";

function List({ ContentList }) {
  return (
    <>
      {ContentList.map((v, i) => {
        return <div key={i}>{v}</div>;
      })}
    </>
  );
}

export default List;
