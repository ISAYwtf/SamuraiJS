import React from "react";
import classes from "./FormControls.module.css";

const FormControl = props => {
    const hasError = props.meta.error && props.meta.touched;
    const errorClass = hasError ? classes.error : "";
    const errorMessage = hasError && props.meta.active ?
        <small className={classes.errorMessage}>{props.meta.error}</small> : "";

    return (
        <div className={`${classes.container} ${props.className} ${errorClass}`}>
            {props.children}
            {errorMessage}
        </div>
    )
}

export const Textarea = props =>
    <FormControl {...props}>
        <textarea {...props.input} className={classes.input} placeholder={props.placeholder}/>
    </FormControl>

export const Input = props => {
    const type = props.type || props.input.type || "text";
    const placeholder = props.placeholder || props.input.placeholder || "";

    return <FormControl {...props}>
        <input {...props.input} className={`${classes.input} ${props.className}`} {...props.attr}
               placeholder={placeholder} type={type}/>
    </FormControl>;
}
