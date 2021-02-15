import {createSelector} from "reselect";

const getUsers = state => {
    return state.usersPage.users
}

export const getUsersState = createSelector(getUsers,
    users => {
        return users.filter(el => true)
    })

export const getPageSizeState = state => {
    return state.usersPage.pageSize
}

export const getTotalUsersCountState = state => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPageState = state => {
    return state.usersPage.currentPage
}

export const getIsFetchingState = state => {
    return state.usersPage.isFetching
}

export const getIsFollowingState = state => {
    return state.usersPage.isFollowing
}
