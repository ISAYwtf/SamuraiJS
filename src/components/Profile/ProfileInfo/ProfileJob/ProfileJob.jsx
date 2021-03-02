import React from "react";
import classes from "../ProfileInfo.module.css";

const ProfileJob = ({lookingForAJob, lookingForAJobDescription, ...props}) => {

    return (
        <div className={classes.profileInfoBlock}>
            <h2>Search for a job</h2>
            <p>
                <strong>{lookingForAJob ? "Looking for a job." : "Not looking for a job."}</strong>
                {lookingForAJobDescription}
            </p>
        </div>
    )
};

export default ProfileJob;
