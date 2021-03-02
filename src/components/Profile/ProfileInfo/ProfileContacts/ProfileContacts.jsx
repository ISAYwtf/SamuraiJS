import React from "react";
import classes from "../ProfileInfo.module.css";

const ProfileContacts = ({contacts, ...props}) => {
    const contactsListJSX = [];

    for (let link in contacts) {
        if (contacts[link]) {
            contactsListJSX.push(<a href={`${contacts[link]}`}>{link}</a>)
        }
    }

    if (contactsListJSX.length > 0) {
        return (
            <div className={classes.profileInfoBlock}>
                <h2>Contacts</h2>
                <div>
                    {contactsListJSX}
                </div>
            </div>
        )
    } else return "";
}

export default ProfileContacts;
