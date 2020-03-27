import React from "react";
// import "./News.css";

const News = () => {

    let updateStatus = () => {
        alert("sss")
    };

    return (
        <div>
            News
            <button onClick={updateStatus}>sss</button>
        </div>
    );
}

export default News;