import React from 'react';
import classes from './Pagination.module.css';

const onPageChanged = (pageNumber, pageSize, setCurrentPage, getUsers) => {
    setCurrentPage(pageNumber);
    getUsers(pageNumber, pageSize);
}

const PaginationItem = ({currentNumber, currentPage, pageSize, ...props}) => {

    const isActive = currentPage === currentNumber || (typeof props.item === "number" && currentPage === props.item)
        ? classes.paginationActive : "";

    let className = props.className ? props.className : "";
    className = className || isActive ? `${className} ${isActive} ${classes.span}` : classes.span;

    return <span onClick={() => onPageChanged(currentNumber, pageSize, props.setCurrentPage, props.getUsers)}
                 className={className} key={currentNumber}>
        {props.item ? props.item : currentNumber}
    </span>;
}

const Pagination = props => {

    const createPagination = () => {
        const {totalItemsCount, pageSize, currentPage, setCurrentPage, getUsers} = props;

        const pagesCount = Math.ceil(totalItemsCount / pageSize); // Количество страниц
        const pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i); // Массив с числами для пагинатора
        }

        let pagination; // Пагинатор

        if (pages.length > 10) { // Если страниц больше 10

            // Далее возвращаем в переменную пагинатора массив с обернутыми числами в разметку
            pagination = pages.map((el, i, arr) => {

                /* Если перебираемое число входит в первые или в последние три
                * или является текущим элементом
                * возвращаем элемент с числом */
                if ((el >= 1 && el < 4) || (el > arr.length - 3 && el <= arr.length)) {
                    return <PaginationItem currentNumber={el} currentPage={currentPage} pageSize={pageSize}
                                           setCurrentPage={setCurrentPage} getUsers={getUsers}/>

                    /* Иначе если текущее число стоит рядом с текущим элементом
                    * возвращаем стрелку влево или вправо, для клика на следующий элемент от текущего*/
                } else if (el === 4 || el === arr.length - 4 || el === arr.length - 3) {
                    if (el === 4) {
                        return <PaginationItem currentNumber={currentPage - 1} currentPage={currentPage}
                                               pageSize={pageSize}
                                               setCurrentPage={setCurrentPage} getUsers={getUsers} item={"<"}
                                               className={classes.border}/>
                    } else if (el === arr.length - 3) {
                        return <PaginationItem currentNumber={currentPage + 1} currentPage={currentPage}
                                               pageSize={pageSize}
                                               setCurrentPage={setCurrentPage} getUsers={getUsers} item={">"}
                                               className={classes.border}/>
                    } else {
                        const length = arr.length - 3;
                        const item = currentPage <= 3
                            ? 4
                            : currentPage >= length
                                ? length
                                : currentPage;

                        return <PaginationItem currentNumber={item} currentPage={currentPage} pageSize={pageSize}
                                               setCurrentPage={setCurrentPage}
                                               getUsers={getUsers} item={item}/>
                    }
                }
            })

            // Если страниц меньше 20, просто возвращаем массив обернутых в разметку чисел
        } else {
            pagination = pages.map(el => {
                return <PaginationItem currentNumber={el} currentPage={currentPage} pageSize={pageSize}
                                       setCurrentPage={setCurrentPage} getUsers={getUsers}/>
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
