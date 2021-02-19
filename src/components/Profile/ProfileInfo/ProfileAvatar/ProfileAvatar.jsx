import React from "react";
import classes from "./ProfileAvatar.module.css";
import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";

const ProfileAvatar = ({photos, fullName, userId, isOwner, ...props}) => {
    const onSelectMainPhoto = e => {
        const photos = e.target.files;
        if (photos.length) {
            props.savePhoto(photos[0]);
        }
    }

    return (
        <div className={classes.profileMainInfo}>
            <div className={classes.profileAvatar}>
                {photos.large ? (
                    <img src={photos.large} alt="avatar"/>
                ) : photos.small ? (
                    <img src={photos.small} alt="avatar"/>
                ) : <span>{fullName.substr(0, 1).toUpperCase()}</span>}
            </div>
            <div>{isOwner ? <input type={"file"} onChange={onSelectMainPhoto}/> : ""}</div>
            <div className={classes.profileStatus}>
                <div className={classes.profileName}>{fullName}</div>
                <ProfileStatusContainer/>
            </div>
            <div className={classes.profileId}>{userId}</div>
        </div>
    )
}

export default ProfileAvatar;
