import React from "react";
import classes from "./ProfileAbout.module.css";

const ProfileAbout = ({photos, fullName, aboutMe, userId}) => {
    return (
        <div className={classes.profileMainInfo}>
            <div className={classes.profileAvatar}>
                {photos.large ? (
                    <img src={photos.large} alt="avatar"/>
                ) : photos.small ? (
                    <img src={photos.small} alt="avatar"/>
                ) : <span>{fullName.substr(0, 1).toUpperCase()}</span>}
            </div>
            <div className={classes.profileAbout}>
                <div className={classes.profileName}>{fullName}</div>
                <div>{aboutMe}</div>
            </div>
            <div className={classes.profileId}>{userId}</div>
        </div>
    )
}

export default ProfileAbout;
