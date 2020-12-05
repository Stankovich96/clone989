import React from 'react';
import { ReactComponent as PageLeftIcon } from "../../../../assets/meetingroom/pagination-left.svg";
import { ReactComponent as PageRightIcon } from "../../../../assets/meetingroom/pagination-right.svg";

import "./Pagination.modules.scss";

const Pagination = ({ roomPerPage, totalRooms, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalRooms/roomPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <nav>
            <ul className="pagination">
                <li className="pagination-list">
                    <a className="pagination-prev"><PageLeftIcon /></a>
                </li>
                 {
                     pageNumbers.map(number => (
                        <li className="pagination-list" key={number}>
                        <a className="pagination-link" onClick={() => paginate(number)}>{number}</a>
                        </li>
                     ))
                 }
                <li className="pagination-list">
                    <a className="pagination-next"><PageRightIcon /></a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;