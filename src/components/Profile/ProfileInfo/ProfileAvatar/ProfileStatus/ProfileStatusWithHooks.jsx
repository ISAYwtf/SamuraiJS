import React, {useState} from "react";

const ProfileStatusWithHooks = props => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = (e) => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onInputChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode
                ? <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
                : <div>
                    <input autoFocus onChange={onInputChange} value={status} onBlur={deactivateEditMode} type="text"/>
                </div>}
        </div>
    )
};

export default ProfileStatusWithHooks;
