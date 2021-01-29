import React from 'react';
import classes from './Pagination.module.css';

const Pagination = (props) => {
    const {totalUsersCount, pageSize, currentPage, onPageChanged} = props;

    const createPagination = () => {
        const pagesCount = Math.ceil(totalUsersCount / pageSize);
        const pages = [];

        let pagination;

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        if (pages.length > 20) {
            let paginationCounter = 0;

            pagination = pages.map((el, i, arr) => {
                if ((el > 0 && el < 4) || (el > arr.length - 3 && el < arr.length)) {

                    return <span onClick={() => onPageChanged(el)}
                                 className={currentPage === el ? classes.paginationActive : ""}
                                 key={el}>{el}</span>

                } else if (currentPage === el) {

                    return <span onClick={() => onPageChanged(el)}
                                 className={classes.paginationActive} key={el}>{el}</span>

                } else if (el === currentPage - 1 || el === currentPage + 1) {

                    if (el < currentPage) {
                        return <span onClick={() => onPageChanged(el)} key={el}>{"<"}</span>
                    } else {
                        return <span onClick={() => onPageChanged(el)} key={el}>{">"}</span>
                    }

                } else {
                    paginationCounter++;

                    if (paginationCounter <= 100) {
                        if (el < currentPage - 1 || el > currentPage + 1) {
                            return "."
                        }
                    }
                }
            })
        } else {
            pagination = pages.map(el => {
                return <span onClick={() => onPageChanged(el)}
                             className={currentPage === el ? classes.paginationActive : ""}>{el}</span>
            })
        }

        return pagination;
    }

    return <div className={classes.pagination}>
        <div className={classes.paginationWrap}>
            {createPagination()}
        </div>
    </div>
}

export default Pagination;
