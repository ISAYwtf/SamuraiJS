import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = (e) => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onInputChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render = () => {
        return (
            <div>
                {!this.state.editMode
                    ? <div onDoubleClick={this.activateEditMode}>
                        <span>{this.state.status}</span>
                    </div>
                    : <div>
                        <input autoFocus onBlur={this.deactivateEditMode} type="text"
                               value={this.state.status} onChange={this.onInputChange}/>
                    </div>}
            </div>
        )
    }
};

export default ProfileStatus;
