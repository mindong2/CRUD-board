import React, { useEffect, useState } from "react";
import RepleContent from "./RepleContent";
import axios from "axios";

const RepleList = ({ postId }) => {
    let [repleList, setRepleList] = useState([]);
    useEffect(() => {
        let body = {
            postId,
        };
        axios
            .post("/api/reple/getList", body)
            .then((res) => {
                if (res.data.success) {
                    setRepleList([...res.data.repleList]);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            {repleList.map((repleItem, idx) => {
                return <RepleContent repleItem={repleItem} key={idx} />;
            })}
        </div>
    );
};

export default RepleList;
