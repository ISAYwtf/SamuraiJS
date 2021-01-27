import React from "react";
import classes from "./ProfileJob.module.css";

const ProfileJob = ({lookingForAJob, lookingForAJobDescription}) => {
    return (
        <div className={classes.profileJob}>
            <h2>Поиск работы</h2>
            <p>
                <span>{lookingForAJob ? "Ищу работу." : "Не ищу работу."}</span>
                {lookingForAJobDescription}
            </p>
        </div>
    )
}

export default ProfileJob;
