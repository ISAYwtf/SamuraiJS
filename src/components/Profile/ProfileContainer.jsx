import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, savePhoto, updateProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }

        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile();
        }
    }

    render = () => <Profile
        isOwner={!this.props.match.params.userId}
        {...this.props}
        savePhoto={this.props.savePhoto}
        updateProfile={this.props.updateProfile}/>
};

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

const mapDispatchToProps = {getProfile, getUserStatus, savePhoto, updateProfile}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
