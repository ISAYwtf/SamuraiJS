import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {updateStatus} from "../../../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import {withRouter} from "react-router-dom";

const mapStateToProps = state => ({
    status: state.profilePage.status,
})

const mapDispatchToProps = {updateStatus}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileStatus);
