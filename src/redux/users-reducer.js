const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

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
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const follow = (userId) => ({
    type: FOLLOW,
    userId
});

export const unFollow = (userId) => ({
    type: UNFOLLOW,
    userId
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users
});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

export const setTotalUsersCount = (totalCount) => ({
    type: SET_TOTAL_COUNT,
    totalCount
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

export default usersReducer;
