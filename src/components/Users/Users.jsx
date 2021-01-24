import React from 'react';
import classes from './Users.module.css';

const Users = ({users, follow, unFollow, setUsers}) => {

    if (users.length === 0) {
        setUsers([
            {
                id: 1,
                fullName: 'Boris M.',
                status: 'Hello everyone!',
                location: {city: 'Moscow', country: 'Russia Federation'},
                img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
                followed: false
            },
            {
                id: 2,
                fullName: 'Alex J.',
                status: 'I have a great life!',
                location: {city: 'New York', country: 'United States'},
                img: "https://s0.rbk.ru/v6_top_pics/media/img/8/22/755895443908228.jpg",
                followed: true
            },
            {
                id: 3,
                fullName: 'Marko P.',
                status: 'If you need some adventures...call me :)',
                location: {city: 'Florence', country: 'Italy'},
                img: "https://www.tubefilter.com/wp-content/uploads/2019/11/dobrik-people.jpg",
                followed: false
            },
        ]);
    }

    return (
        <div>
            {users.map(el => {
                const followBtn = flag => flag ? "Unfollow" : "Follow";
                const checkFollowing = (flag, id) => flag ? () => unFollow(id) : () => follow(id);

                return (
                    <div className={classes.user} key={el.id}>
                        <div className={classes.userAvatar}>
                            <div className={classes.avatarImage}>
                                <img
                                    src={el.img}
                                    alt="avatar"/>
                            </div>
                            <button className={classes.avatarButton}
                                    onClick={checkFollowing(el.followed, el.id)}>
                                {followBtn(el.followed)}
                            </button>
                        </div>
                        <div className={classes.userInfo}>
                            <div className={classes.infoMain}>
                                <div className={classes.infoName}>{el.fullName}</div>
                                <div className={classes.infoStatus}>{el.status}</div>
                            </div>
                            <div className={classes.infoLocation}>
                                <div className={classes.infoCountry}>{el.location.country}</div>
                                <div className={classes.infoCity}>{el.location.city}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Users;
