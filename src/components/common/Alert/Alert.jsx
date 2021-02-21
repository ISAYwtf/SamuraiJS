import React from "react";
import classes from "./Alert.module.css";
import {connect} from "react-redux";
import {toggleHasError} from "../../../redux/App/app-reducer";

const Alert = props => {
    const resetError = () => {
        props.toggleHasError();
    }

    return <div className={classes.alert} onClick={resetError}>
        <div className={classes.message}>
            {props.children}
        </div>
    </div>
}

const mapDispatchToProps = {
    toggleHasError
}

export default connect(null, mapDispatchToProps)(Alert);
