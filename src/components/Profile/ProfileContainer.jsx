import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.getProfile(2);
    }

    getProfile = (userId) => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render = () => {
        return <Profile {...this.props} />
    }
};

const mapStateToProps = state => ({
    profile: state.profilePage.profile
});

// const mapDispatchToProps = {
//     setUserProfile
// }

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
