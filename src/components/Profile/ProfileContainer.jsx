import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 14339;

        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }

    render = () => <Profile {...this.props} />
};

const mapStateToProps = state => ({
    profile: state.profilePage.profile
});

const mapDispatchToProps = {getProfile, getUserStatus}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
