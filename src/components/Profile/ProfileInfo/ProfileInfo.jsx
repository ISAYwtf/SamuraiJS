import React from "react";
import classes from './ProfileInfo.module.css';
import ProfileContacts from "./ProfileContacts/ProfileContacts";
import ProfileJob from "./ProfileJob/ProfileJob";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileAbout from "./ProfileAbout/ProfileAbout";

const ProfileInfo = ({profile}) => {
    return (
        <div>
            <div>
                <img className={classes.headImg}
                     src="https://s23527.pcdn.co/wp-content/uploads/2020/01/100k-moon.jpg.optimal.jpg" alt="planet"/>
            </div>
            <div className={classes.profileUser}>
                <ProfileAvatar fullName={profile.fullName} status={"bla bla bla"} photos={profile.photos}
                               userId={profile.userId}/>
                <ProfileAbout aboutMe={profile.aboutMe}/>
                <ProfileJob lookingForAJob={profile.lookingForAJob}
                            lookingForAJobDescription={profile.lookingForAJobDescription}/>
                <ProfileContacts contacts={profile.contacts}/>
            </div>
        </div>
    )
}

export default ProfileInfo;
