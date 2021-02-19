import React from "react";
import classes from "../ProfileJob/ProfileJob.module.css";

const ProfileAbout = ({aboutMe, ...props}) => {
    if (!aboutMe) {
        return "";
    }

    return (
        <div className={classes.profileJob}>
            <h2>About me</h2>
            <p>{aboutMe}</p>
        </div>
    )
}

export default ProfileAbout;
