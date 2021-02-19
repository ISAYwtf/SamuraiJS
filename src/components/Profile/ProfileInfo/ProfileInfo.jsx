import React, {useState} from "react";
import classes from './ProfileInfo.module.css';
import ProfileContacts from "./ProfileContacts/ProfileContacts";
import ProfileJob from "./ProfileJob/ProfileJob";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileAbout from "./ProfileAbout/ProfileAbout";
import ProfileDataFormRedux from "./ProfileDataForm";

const ProfileInfo = ({isOwner, profile, ...props}) => {
    let [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        if (isOwner) {
            setEditMode(true);
        }
    }

    const deActivateMode = formData => {
        props.updateProfile(formData)
            .then(() => setEditMode(false));
    }

    return (
        <div>
            <div>
                <img className={classes.headImg}
                     src="https://s23527.pcdn.co/wp-content/uploads/2020/01/100k-moon.jpg.optimal.jpg" alt="planet"/>
            </div>
            {!editMode
                ? <div className={classes.profileUser}>
                    <ProfileAvatar fullName={profile.fullName} photos={profile.photos}
                                   userId={profile.userId} isOwner={isOwner} savePhoto={props.savePhoto}/>
                    <ProfileAbout aboutMe={profile.aboutMe}/>
                    <ProfileJob lookingForAJob={profile.lookingForAJob}
                                lookingForAJobDescription={profile.lookingForAJobDescription}/>
                    <ProfileContacts contacts={profile.contacts}/>
                </div>
                : <ProfileDataFormRedux onSubmit={deActivateMode} profile={profile} initialValues={profile}/>}
            {!editMode && isOwner
                ? <button onClick={activateEditMode}>Edit profile</button>
                : ""}
        </div>
    )
}

export default ProfileInfo;
