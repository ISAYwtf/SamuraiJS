import React from "react";
import classes from "../ProfileInfo.module.css";

const ProfileAbout = ({aboutMe, ...props}) => {
    if (!aboutMe) {
        return "";
    }

    return (
        <div className={classes.profileInfoBlock}>
            <h2>About me</h2>
            <p>{aboutMe}</p>
        </div>
    )
}

export default ProfileAbout;
