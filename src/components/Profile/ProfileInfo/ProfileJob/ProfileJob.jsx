import React from "react";
import classes from "./ProfileJob.module.css";

const ProfileJob = ({lookingForAJob, lookingForAJobDescription, ...props}) => {

    return (
        <div className={classes.profileJob}>
            <h2>Search for a job</h2>
            <p>
                <span>{lookingForAJob ? "Looking for a job." : "Not looking for a job."}</span>
                {lookingForAJobDescription}
            </p>
        </div>
    )
};

export default ProfileJob;
