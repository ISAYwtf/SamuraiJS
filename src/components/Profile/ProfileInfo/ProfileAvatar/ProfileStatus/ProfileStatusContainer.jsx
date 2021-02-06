import React from "react";
import ProfileStatus from "./ProfileStatus";
import {compose} from "redux";
import {connect} from "react-redux";
import {onChangeInput, updateStatus} from "../../../../../redux/profile-reducer";

class ProfileStatusContainer extends React.Component {
    render = () => {
        return <ProfileStatus updateStatus={this.props.updateStatus} status={this.props.status}
                              onChangeInput={this.props.onChangeInput} newText={this.props.newText}/>
    }
}

const mapStateToProps = state => ({
    status: state.profilePage.status,
    newText: state.profilePage.newText
})

const mapDispatchToProps = {updateStatus, onChangeInput: onChangeInput}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileStatusContainer);
