import React from 'react';
import classes from './Pagination.module.css';

const onPageChanged = (pageNumber, pageSize, setCurrentPage, getUsers) => {
    setCurrentPage(pageNumber);
    getUsers(pageNumber, pageSize);
}

const PaginationItem = ({currentNumber, currentPage, pageSize, item = null, ...props}) =>
    <span onClick={() => onPageChanged(currentNumber, pageSize, props.setCurrentPage, props.getUsers)}
          className={currentPage === currentNumber ? classes.paginationActive : ""}
          key={currentNumber}>
        {item ? item : currentNumber}
    </span>

const Pagination = props => {

    const createPagination = () => {
        const {totalItemsCount, pageSize, currentPage, setCurrentPage, getUsers} = props;

        const pagesCount = Math.ceil(totalItemsCount / pageSize); // Количество страниц
        const pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i); // Массив с числами для пагинатора
        }

        let pagination; // Пагинатор

        if (pages.length > 20) { // Если страниц больше 20
            let paginationCounter = 0; // Создаем счетчик для непоказанных чисел в пагинаторе

            // Далее возвращаем в переменную пагинатора массив с обернутыми числами в разметку
            pagination = pages.map((el, i, arr) => {

                /* Если перебираемое число входит в первые или в последние три
                * или является текущим элементом
                * возвращаем элемент с числом */
                if ((el >= 1 && el < 4) || (el > arr.length - 3 && el <= arr.length) || currentPage === el) {
                    return <PaginationItem currentNumber={el} currentPage={currentPage} pageSize={pageSize}
                                           setCurrentPage={setCurrentPage} getUsers={getUsers}/>

                    /* Иначе если текущее число стоит рядом с текущим элементом
                    * возвращаем стрелку влево или вправо, для клика на следующий элемент от текущего*/
                } else if (el === currentPage - 1 || el === currentPage + 1) {
                    if (el < currentPage) {
                        return <PaginationItem currentNumber={el} currentPage={currentPage} pageSize={pageSize}
                                               setCurrentPage={setCurrentPage} getUsers={getUsers} item={"<"}/>
                    } else {
                        return <PaginationItem currentNumber={el} currentPage={currentPage} pageSize={pageSize}
                                               setCurrentPage={setCurrentPage} getUsers={getUsers} item={">"}/>
                    }
                } else {
                    paginationCounter++; // Увеличиваем счетчик непоказанных чисел

                    if (paginationCounter <= 100) { // Если непоказанных чисел меньше 100
                        return "." // Показываем точку
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
