import React from "react";

import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.headImg}
                     src="https://s23527.pcdn.co/wp-content/uploads/2020/01/100k-moon.jpg.optimal.jpg" alt="planet"/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
