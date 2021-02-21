import React from "react";
import classes from "./Button.module.css";

const Button = props => {
    let {className, attr} = props;

    className = className ? className : "";

    return <button {...attr} className={`${classes.button} ${className}`}>{props.children}</button>
}

export default Button;
