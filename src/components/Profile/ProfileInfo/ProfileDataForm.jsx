import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormControls/FormControls";
import {required} from "../../../utils/validators/validators";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <label>
                <h2>FullName</h2>
                <Field placeholder={"FullName"} name={"fullName"}
                       validate={[required]} component={Input} type={"text"}/>
            </label>
            <label>
                <h2>About Me</h2>
                <Field placeholder={"About me"} name={"aboutMe"} component={Textarea}/>
            </label>
            <label>
                <h2>Looking for a job?</h2>
                <Field name={"lookingForAJob"} component={Input} type={"checkbox"}/>
            </label>
            <label>
                <h2>Description for a looking job</h2>
                <Field placeholder={"Description for a looking job"} name={"lookingForAJobDescription"}
                       component={Textarea}/>
            </label>
            <div>
                <h2>Contacts</h2>
                <div>
                    {Object.keys(profile.contacts).map(key => {
                        return <label key={key}>
                            <strong>{key}</strong>
                            <Field name={`contacts.${key}`} component={Input} type={"text"}
                                   placeholder={`https://${key}/`}/>
                        </label>
                    })}
                </div>
            </div>
        </div>
        {error
            ? <div>{error}</div>
            : ""
        }
        <button>Save changes</button>
    </form>
}

const ProfileDataFormRedux = reduxForm({form: "editProfile"})(ProfileDataForm);

export default ProfileDataFormRedux;
