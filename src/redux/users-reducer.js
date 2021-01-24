const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
    users: [
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
    ],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (action.userId === el.id) {
                        return {...el, followed: true}
                    }
                    return el;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (action.userId === el.id) {
                        return {...el, followed: false}
                    }
                    return el;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({
    type: FOLLOW,
    userId
});

export const unFollowAC = (userId) => ({
    type: UNFOLLOW,
    userId
});

export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
});

export default usersReducer;
