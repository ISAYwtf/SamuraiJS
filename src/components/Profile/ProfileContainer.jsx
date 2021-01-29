import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;

        this.props.getProfile(userId);
    }

    render = () => <Profile {...this.props} />
};

const mapStateToProps = state => ({
    profile: state.profilePage.profile
});

const mapDispatchToProps = {getProfile}

const withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent);
