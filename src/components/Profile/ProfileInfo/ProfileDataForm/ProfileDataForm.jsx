import React from "react";
import {Form, Field} from "react-final-form";
import {Input, Textarea} from "../../../common/FormControls/FormControls";
import {required, composeValidators} from "../../../../utils/validators/validators";
import Button from "../../../common/Button";
import classes from "./ProfileDataForm.module.css";

const ProfileDataForm = props =>
    <Form onSubmit={props.onSubmit} initialValues={props.initialValues} profile={props.profile}>
        {({handleSubmit, profile, error}) => (
            <form onSubmit={handleSubmit}>
                <div className={classes.form}>
                    <label>
                        <h2>FullName</h2>
                        <Field placeholder={"FullName"} name={"fullName"}
                               validate={composeValidators(required)} component={Input} type={"text"}/>
                    </label>
                    <label>
                        <h2>About Me</h2>
                        <Field placeholder={"About me"} name={"aboutMe"} component={Textarea}/>
                    </label>
                    <div>
                        <div className={classes.lookingForAJob}>
                            <label className={classes.lookingForAJobCheckbox}>
                                <h2>Looking for a job?</h2>
                                <Field name={"lookingForAJob"} component={Input} type={"checkbox"}/>
                            </label>
                            <label htmlFor={"lookingForAJobDescription"}>
                                <h2>Description for a looking job</h2>
                            </label>
                        </div>
                        <Field placeholder={"Description for a looking job"} name={"lookingForAJobDescription"}
                               component={Textarea} id={"lookingForAJobDescription"}/>
                    </div>
                    <div>
                        <h2>Contacts</h2>
                        <div>
                            {Object.keys(profile.contacts).map(key => {
                                return <label className={classes.contactItem} key={key}>
                                    <strong className={classes.contactItemTitle}>{key}</strong>
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
                <Button>Save changes</Button>
            </form>
        )}

    </Form>

export default ProfileDataForm;
