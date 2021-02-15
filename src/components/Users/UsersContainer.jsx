import React from 'react';
import {connect} from 'react-redux';
import {followTo, getUsers, setCurrentPage, unFollowTo} from '../../redux/users-reducer';
import Users from './Users';
import {compose} from "redux";
import {
    getCurrentPageState, getIsFetchingState, getIsFollowingState,
    getPageSizeState,
    getTotalUsersCountState,
    getUsersState
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render = () => <>
        <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
               users={this.props.users} unFollowTo={this.props.unFollowTo} followTo={this.props.followTo}
               currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
               isFetching={this.props.isFetching} isFollowing={this.props.isFollowing}
        />
    </>
}

// const mapStateToProps = state => ({
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     isFollowing: state.usersPage.isFollowing
// })

const mapStateToProps = state => ({
    users: getUsersState(state),
    pageSize: getPageSizeState(state),
    totalUsersCount: getTotalUsersCountState(state),
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
