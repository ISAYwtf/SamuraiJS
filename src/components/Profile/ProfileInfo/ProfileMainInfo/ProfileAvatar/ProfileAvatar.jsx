import classes from "./ProfileAvatar.module.css";
import React from "react";

const ProfileAvatar = ({photos, fullName}) => {
    let profileImage;
    if (photos.large) {
        profileImage = <img className={classes.profileImage} src={photos.large} alt="avatar"/>;
    } else {
        profileImage = photos.small
            ? <img className={classes.profileImage} src={photos.small} alt="avatar"/>
            : <span className={classes.imgName}>{fullName.substr(0, 1).toUpperCase()}</span>;
    }

    return (
        <div className={classes.profileImageWrap}>
            {profileImage}
        </div>
    )
}

export default ProfileAvatar;
