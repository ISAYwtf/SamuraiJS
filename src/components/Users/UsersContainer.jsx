import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {followTo, getUsers, setCurrentPage, unFollowTo} from '../../redux/Users/users-reducer';
import Users from './Users';
import {compose} from "redux";
import {
    getCurrentPageState, getIsFetchingState, getIsFollowingState,
    getPageSizeState,
    getTotalUsersCountState,
    getUsersState
} from "../../redux/Users/users-selectors";

const UsersContainer = props => {
    useEffect(() => {
        const {currentPage, pageSize} = props
        props.getUsers(currentPage, pageSize);
    }, [props.currentPage])

    return <Users {...props}/>
}

const mapStateToProps = state => ({
    users: getUsersState(state),
    pageSize: getPageSizeState(state),
    totalItemsCount: getTotalUsersCountState(state),
    currentPage: getCurrentPageState(state),
    isFetching: getIsFetchingState(state),
    isFollowing: getIsFollowingState(state)
})

const mapDispatchToProps = {
    setCurrentPage,
    getUsers,
    unFollowTo,
    followTo
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer);
