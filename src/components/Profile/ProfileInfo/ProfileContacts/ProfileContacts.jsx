import React from "react";
import classes from "./ProfileContacts.module.css";

const ProfileContacts = ({contacts}) => {
    const contactsList = [];
    for (let link in contacts) {
        if (contacts[link]) {
            contactsList.push(<a href={`${contacts[link]}`}>{link}</a>)
        }
    }

    if (contactsList.length > 0) {
        return (
            <div className={classes.profileContacts}>
                <h2>Contacts</h2>
                <div className={classes.contactsSocial}>
                    {contactsList}
                </div>
            </div>
        )
    } else return "";
}

export default ProfileContacts;
