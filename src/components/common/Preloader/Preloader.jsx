import React from 'react';
import classes from "./Preloader.module.css";

const Preloader = ({flag = true}) => {
    if (!flag) return "";

    return <section className={classes.preloaderWrap}>
        <div className={classes.preloaderPulse}></div>
    </section>
}

export default Preloader;
