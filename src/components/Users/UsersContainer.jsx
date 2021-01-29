import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.getUsers(this.props.currentPage);
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.getUsers(pageNumber);
    }

    getUsers = (currentPage) => {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    render = () => <>
        <Users getUsers={this.getUsers} setCurrentPage={this.props.setCurrentPage}
               totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
               users={this.props.users} unFollow={this.props.unFollow} follow={this.props.follow}
               currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
               isFetching={this.props.isFetching}
        />
    </>
}

const mapStateToProps = state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
})

const mapDispatchToProps = {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
