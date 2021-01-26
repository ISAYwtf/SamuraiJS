import React from 'react';
import classes from "./Preloader.module.css";

const Preloader = () => {
    return (
        <section className={classes.preloaderWrap}>
            <div className={classes.preloaderPulse}></div>
        </section>
    )
}

export default Preloader;
