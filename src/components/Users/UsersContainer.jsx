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
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = pageNumber => {
        const {pageSize} = this.props;
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, pageSize);
    }

    render = () => {
        const {
            totalUsersCount,
            pageSize,
            users,
            unFollowTo,
            followTo,
            currentPage,
            isFetching,
            isFollowing
        } = this.props;
        return <>
            <Users totalUsersCount={totalUsersCount} pageSize={pageSize}
                   users={users} unFollowTo={unFollowTo} followTo={followTo}
                   currentPage={currentPage} onPageChanged={this.onPageChanged}
                   isFetching={isFetching} isFollowing={isFollowing}
            />
        </>
    }
}

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
