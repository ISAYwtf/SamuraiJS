import React from "react";

import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileContacts from "./ProfileContacts/ProfileContacts";
import ProfileJob from "./ProfileJob/ProfileJob";
import ProfileAbout from "./ProfileAbout/ProfileAbout";

const ProfileInfo = ({profile}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={classes.headImg}
                     src="https://s23527.pcdn.co/wp-content/uploads/2020/01/100k-moon.jpg.optimal.jpg" alt="planet"/>
            </div>
            <div className={classes.profileUser}>
                <ProfileAbout fullName={profile.fullName} aboutMe={profile.aboutMe} photos={profile.photos}
                              userId={profile.userId}/>
                <ProfileJob lookingForAJob={profile.lookingForAJob}
                            lookingForAJobDescription={profile.lookingForAJobDescription}/>
                <ProfileContacts contacts={profile.contacts}/>
            </div>
        </div>
    )
}

export default ProfileInfo;
