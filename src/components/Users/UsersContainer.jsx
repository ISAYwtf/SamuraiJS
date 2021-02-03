import React from 'react';
import {connect} from 'react-redux';
import {followTo, getUsers, setCurrentPage, unFollowTo} from '../../redux/users-reducer';
import Users from './Users';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    render = () => <>
        <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
               users={this.props.users} unFollowTo={this.props.unFollowTo} followTo={this.props.followTo}
               currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
               isFetching={this.props.isFetching} isFollowing={this.props.isFollowing}
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
    setCurrentPage,
    getUsers,
    unFollowTo,
    followTo
};

export default compose(

    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersContainer);
