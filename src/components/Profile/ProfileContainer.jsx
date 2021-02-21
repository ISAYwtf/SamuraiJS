import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, savePhoto, toggleIsFetching, updateProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Preloader from "../common/Preloader/Preloader";

const refreshProfile = async (id, authorizedUserId, getProfile, getUserStatus, history) => {
    let userId = id;
    if (!userId) {
        userId = authorizedUserId;
        if (!userId) {
            history.push("/login");
        }
    }

    await getProfile(userId);
    getUserStatus(userId);

}

const ProfileContainer = props => {
    const {match, authorizedUserId, getProfile, getUserStatus} = props;

    useEffect(() => {
        props.toggleIsFetching(true);
        refreshProfile(match.params.userId, authorizedUserId, getProfile, getUserStatus, props.history)
            .then(response => props.toggleIsFetching(false));
    }, [match.params.userId])

    if (props.isFetching) return <Preloader flag={props.isFetching}/>

    return <Profile isOwner={!match.params.userId} {...props}/>
};

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    isFetching: state.profilePage.isFetching
});

const mapDispatchToProps = {getProfile, getUserStatus, savePhoto, updateProfile, toggleIsFetching}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
