import React from "react";
import classes from "./ProfileMainInfo.module.css";
import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";
import ProfileAvatar from "./ProfileAvatar";
import Button from "../../../common/Button";

const SelectPhotoButton = ({isOwner, savePhoto}) => {
    let selectMsg = "Select your image";

    const onSelectMainPhoto = e => {
        const photos = e.target.files;
        if (photos.length) {
            savePhoto(photos[0]);
            selectMsg = photos[0];
        }
    }

    if (isOwner) {
        return <label className={classes.selectImgBtn}>
            <span className={classes.button}>{selectMsg}</span>
            <input type={"file"} onChange={onSelectMainPhoto}/>
        </label>
    } else {
        return ""
    }
}

const ProfileMainInfo = ({photos, fullName, userId, isOwner, ...props}) => {

    return (
        <div className={classes.profileMainInfo}>

            <div className={classes.profileAvatar}>
                <ProfileAvatar photos={photos} fullName={fullName}/>
                <SelectPhotoButton isOwner={isOwner} savePhoto={props.savePhoto}/>
            </div>

            <div className={classes.profileStatus}>
                <div className={classes.profileName}>{fullName}</div>
                <ProfileStatusContainer/>
            </div>

            <div className={classes.profileId}>{userId}</div>
        </div>
    )
};

export default ProfileMainInfo;
