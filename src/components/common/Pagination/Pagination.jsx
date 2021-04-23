import React from 'react';
import classes from './Pagination.module.css';

const onPageChanged = (pageNumber, pageSize, setCurrentPage, getUsers, length = null) => {
    let pageNum = pageNumber < 1 ? 1 : pageNumber;

    if (length && pageNum > length) {
        pageNum = length;
    }

    setCurrentPage(pageNum);
    getUsers(pageNum, pageSize);
}

const PaginationItem = ({currentNumber, currentPage, pageSize, ...props}) => {
    const isActive = currentPage === currentNumber || (typeof props.item === "number" && currentPage === props.item)
        ? classes.paginationActive : "";

    let className = isActive ? `${isActive} ${classes.span}` : classes.span;

    return <span onClick={() => onPageChanged(currentNumber, pageSize, props.setCurrentPage, props.getUsers)}
                 className={className} key={currentNumber}>
        {props.item ? props.item : currentNumber}
    </span>;
}

const PaginationControls = props => {
    const {pagesCount, getUsers, setCurrentPage, pageSize, currentPage} = props;

    return (
        <div className={classes.paginationControls}>
            <span className={classes.span}
                  onClick={() => onPageChanged(currentPage - 1, pageSize, setCurrentPage, getUsers)}>
                {'<'}
            </span>
            <span className={classes.span}>
                {currentPage}
            </span>
            <span className={classes.span}
                  onClick={() => onPageChanged(currentPage + 1, pageSize, setCurrentPage, getUsers, pagesCount)}>
                {'>'}
            </span>
        </div>
    )
}

const createPagination = (pageSize, currentPage, setCurrentPage, getUsers, pagesCount) => {
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i); // Массив с числами для пагинатора
    }

    let pagination; // Пагинатор

    if (pages.length > 6) {
        pagination = pages.map((el, i, arr) => {

            /* Если перебираемое число входит в первые или в последние три
            * возвращаем элемент с числом */
            if ((el >= 1 && el <= 3) || (el > arr.length - 3 && el <= arr.length)) {
                return <PaginationItem currentNumber={el} currentPage={currentPage} pageSize={pageSize}
                                       setCurrentPage={setCurrentPage} getUsers={getUsers}/>
            }
        })
    } else {
        pagination = pages.map(el => {
            return <PaginationItem currentNumber={el} currentPage={currentPage} pageSize={pageSize}
                                   setCurrentPage={setCurrentPage} getUsers={getUsers}/>
        })
    }

    return pagination;
}

const Pagination = props => {
    const {totalItemsCount, pageSize, currentPage, setCurrentPage, getUsers} = props;
    const pagesCount = Math.ceil(totalItemsCount / pageSize); // Количество страниц

    return <div className={classes.pagination}>
        <div className={classes.paginationWrap}>
            <div className={classes.paginationNums}>
                {createPagination(pageSize, currentPage, setCurrentPage, getUsers, pagesCount)}
            </div>
            <PaginationControls currentPage={currentPage} pageSize={pageSize} setCurrentPage={setCurrentPage}
                                getUsers={getUsers} pagesCount={pagesCount}/>
        </div>
    </div>
}

export default Pagination;
