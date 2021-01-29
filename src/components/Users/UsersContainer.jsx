import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowing,
    unFollow
} from '../../redux/users-reducer';
import Users from './Users';
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    render = () => <>
        <Users setCurrentPage={this.props.setCurrentPage}
               totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
               users={this.props.users} unFollow={this.props.unFollow} follow={this.props.follow}
               currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
               isFetching={this.props.isFetching} toggleIsFollowing={this.props.toggleIsFollowing}
               isFollowing={this.props.isFollowing}
        />
    </>
}

const mapStateToProps = state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowing: state.usersPage.isFollowing
})

const mapDispatchToProps = {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowing
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
