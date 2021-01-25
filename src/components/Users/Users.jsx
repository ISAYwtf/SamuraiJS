import React from 'react';
import classes from './Users.module.css';
import * as axios from "axios";

// let temp = [
//     {
//         id: 1,
//         fullName: 'Boris M.',
//         status: 'Hello everyone!',
//         location: {city: 'Moscow', country: 'Russia Federation'},
//         img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
//         followed: false
//     },
//     {
//         id: 2,
//         fullName: 'Alex J.',
//         status: 'I have a great life!',
//         location: {city: 'New York', country: 'United States'},
//         img: "https://s0.rbk.ru/v6_top_pics/media/img/8/22/755895443908228.jpg",
//         followed: true
//     },
//     {
//         id: 3,
//         fullName: 'Marko P.',
//         status: 'If you need some adventures...call me :)',
//         location: {city: 'Florence', country: 'Italy'},
//         img: "https://www.tubefilter.com/wp-content/uploads/2019/11/dobrik-people.jpg",
//         followed: false
//     },
// ];

// users, follow, unFollow, setUsers

class Users extends React.Component {
    componentDidMount() {
        this.getUsers(this.props.currentPage);
    }

    getUsers = (currentPage) => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.getUsers(pageNumber);
    }

    createPagination = () => {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];

        let pagination;

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        if (pages.length > 20) {
            let paginationCounter = 0;
            pagination = pages.map((el, i, arr) => {
                const currentPage = this.props.currentPage;

                if ((el > 0 && el < 4) || (el > arr.length - 3 && el < arr.length)) {
                    return <span onClick={() => this.onPageChanged(el)}
                                 className={currentPage === el && classes.paginationActive}
                                 key={el}>{el}</span>
                } else if (currentPage === el) {
                    return <span onClick={() => this.onPageChanged(el)}
                                 className={classes.paginationActive} key={el}>{el}</span>
                } else if (el === currentPage - 1 || el === currentPage + 1) {
                    if (el < currentPage) {
                        return <span onClick={() => this.onPageChanged(el)} key={el}>{"<"}</span>
                    } else {
                        return <span onClick={() => this.onPageChanged(el)} key={el}>{">"}</span>
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
                const currentPage = this.props.currentPage;

                return <span onClick={() => this.onPageChanged(el)}
                             className={currentPage === el && classes.paginationActive}>{el}</span>
            })
        }

        return pagination;
    }

    render = () => {
        return <div className={classes.usersWrap}>
            {
                this.props.users.map(el => {
                    const followBtn = flag => flag ? "Unfollow" : "Follow";
                    const checkFollowing = (flag, id) => {
                        return flag ? () => this.props.unFollow(id) : () => this.props.follow(id);
                    };
                    const checkImage = (img, name) => {
                        if (img !== null) {
                            return <img src={img} alt="avatar"/>;
                        } else {
                            return name.substr(0, 1).toUpperCase();
                        }
                    };

                    return (
                        <div className={classes.user} key={el.id}>
                            <div className={classes.userAvatar}>
                                <div className={classes.avatarImage}>
                                    {checkImage(el.photos.small, el.name)}
                                </div>
                                <button className={classes.avatarButton}
                                        onClick={checkFollowing(el.followed, el.id)}>
                                    {followBtn(el.followed)}
                                </button>
                            </div>
                            <div className={classes.userInfo}>
                                <div className={classes.infoMain}>
                                    <div className={classes.infoName}>{el.name}</div>
                                    <div className={classes.infoStatus}>{el.status}</div>
                                </div>
                                <div className={classes.infoLocation}>
                                    <div className={classes.infoCountry}>{'el.location.country'}</div>
                                    <div className={classes.infoCity}>{'el.location.city'}</div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            <div className={classes.pagination}>
                <div className={classes.paginationWrap}>
                    {this.createPagination()}
                </div>
            </div>
        </div>
    }
}

export default Users;
