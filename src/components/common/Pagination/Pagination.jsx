import React from "react";
import "./Pagination.css";

const Pagination = ({totalUserCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUserCount / pageSize) ; //вычисляем количество страниц

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i); // набивает масив страниц
    }

    return (
        <div className="pagination">
            {pages.map( p => {
                return <span className={currentPage === p ? "selectedPage" : ""}
                             onClick={ () => { onPageChanged(p) }} key={p}> {p} </span>
            })}
        </div>
    )
};

export default Pagination;