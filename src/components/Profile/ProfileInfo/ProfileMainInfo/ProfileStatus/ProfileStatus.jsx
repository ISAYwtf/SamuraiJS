import React, {useState} from "react";
import {Form, Field} from "react-final-form";
import {Input} from "../../../../common/FormControls/FormControls";

const ProfileStatusForm = props => {
    return (
        <Form initialValues={props.initialValues} onSubmit={props.deactivateEditMode}>
            {({handleSubmit}) => {
                const submit = handleSubmit;
                const attr = {
                    "autoFocus": true,
                    "onBlur": e => submit(e)
                };

                return (
                    <form onSubmit={handleSubmit}>
                        <Field component={Input} name={"status"} attr={attr}
                               type="text"/>
                    </form>
                )
            }}
        </Form>
    );
};

const ProfileStatus = props => {

    const isOwner = !props.match.params.userId;

    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        if (isOwner) {
            setEditMode(true);
        }
    }

    const deactivateEditMode = (status) => {
        setEditMode(false);
        props.updateStatus(status.status);
    }

    return (
        <div>
            {!editMode
                ? isOwner
                    ? <div>
                        <span onDoubleClick={activateEditMode}>{props.status}</span>
                    </div>
                    : <div>
                        <span>{props.status}</span>
                    </div>
                : <ProfileStatusForm initialValues={{"status": props.status}}
                                     deactivateEditMode={deactivateEditMode}/>}
        </div>
    )
};

export default ProfileStatus;
