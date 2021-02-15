import React from "react";
import ProfileStatus from "./ProfileStatus";
import {compose} from "redux";
import {connect} from "react-redux";
import {updateStatus} from "../../../../../redux/profile-reducer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

// class ProfileStatusContainer extends React.Component {
//     render = () => {
//         return <ProfileStatus updateStatus={this.props.updateStatus} status={this.props.status}/>
//     }
// }

const mapStateToProps = state => ({
    status: state.profilePage.status,
})

const mapDispatchToProps = {updateStatus}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileStatusWithHooks);
