import React from 'react';
import DialogItem from "../Dialogs/DialogItem/DialogItem";

import classes from './Dialogs.module.css';

const Dialogs = ({dialogsPage}) => {
    const {dialogs} = dialogsPage;

    const dialogsElements = dialogs.map(el => <DialogItem name={el.name} key={el.id} id={el.id}/>);

    return (
        <div className={`component component--sidebar`}>
            <h3 className={classes.title}>Dialogs</h3>
            <div className={classes.dialogsList}>{dialogsElements}</div>
        </div>
    )
};

export default Dialogs;
