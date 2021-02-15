import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {updateStatus} from "../../../../../redux/profile-reducer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const mapStateToProps = state => ({
    status: state.profilePage.status,
})

const mapDispatchToProps = {updateStatus}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileStatusWithHooks);
