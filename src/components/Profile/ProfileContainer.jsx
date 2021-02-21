import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, savePhoto, toggleIsFetching, updateProfile} from "../../redux/Profile/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Preloader from "../common/Preloader/Preloader";
import {getProfileFetching, getProfileState} from "../../redux/Profile/profile-selectors";
import {getAuthorizedId, getIsAuth} from "../../redux/Auth/auth-selectors";

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
    profile: getProfileState(state),
    authorizedUserId: getAuthorizedId(state),
    isAuth: getIsAuth(state),
    isFetching: getProfileFetching(state)
});

const mapDispatchToProps = {getProfile, getUserStatus, savePhoto, updateProfile, toggleIsFetching}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
