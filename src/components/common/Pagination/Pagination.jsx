import React, {useState} from "react";
import "./Pagination.css";

const Pagination = ({totalItemsCount, pageSize, currentPage, portionSize = 8, onPageChanged}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize) ; //вычисляем количество страниц

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i); // набивает масив страниц
    }

    let portionCount = Math.ceil(pagesCount / portionSize );
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className="pagination">
            {portionNumber > 1 && <span>
                <button onClick={() => {setPortionNumber( 1) }}> {"<<"} </button>
                <button onClick={() => {setPortionNumber(portionNumber - 1) }}> {"<"} </button>
            </span>

            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map( p => {
                return <span className={'pagination_item ' + (currentPage === p ? 'selectedPage' : '')}
                             onClick={ () => { onPageChanged(p) }} key={p}> {p} </span>
            })}

            { portionCount > portionNumber && <span>
                <button onClick={() => {setPortionNumber(portionNumber + 1) }}> {">"} </button>
                <button onClick={() => {setPortionNumber(portionCount) }}> {">>"} </button>
            </span>

            }
        </div>
    )
};

export default Pagination;