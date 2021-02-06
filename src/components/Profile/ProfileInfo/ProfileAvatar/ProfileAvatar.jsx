import React from "react";
import classes from "./ProfileAvatar.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileAvatar = ({photos, fullName, status, userId}) => {
    return (
        <div className={classes.profileMainInfo}>
            <div className={classes.profileAvatar}>
                {photos.large ? (
                    <img src={photos.large} alt="avatar"/>
                ) : photos.small ? (
                    <img src={photos.small} alt="avatar"/>
                ) : <span>{fullName.substr(0, 1).toUpperCase()}</span>}
            </div>
            <div className={classes.profileStatus}>
                <div className={classes.profileName}>{fullName}</div>
                <ProfileStatus status={status} />
            </div>
            <div className={classes.profileId}>{userId}</div>
        </div>
    )
}

export default ProfileAvatar;
