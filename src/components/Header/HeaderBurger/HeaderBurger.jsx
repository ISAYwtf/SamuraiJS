import React from "react";
import classes from "./HeaderBurger.module.css";
import {compose} from "redux";
import {connect} from "react-redux";
import {toggleIsShowed} from "../../../redux/Sidebar/sidebar-reducer";

const HeaderBurger = ({toggleIsShowed}) => {
    const openSidebar = e => toggleIsShowed(true);

    return (
        <div className={classes.burger} onClick={openSidebar}>
            <svg>
                <g>
                    <rect width={"3px"} height={"3px"} x={"0"} y={"0"}/>
                    <rect width={"3px"} height={"3px"} x={"0"} y={"10"}/>
                    <rect width={"3px"} height={"3px"} x={"0"} y={"20"}/>
                </g>
                <g>
                    <rect width={"3px"} height={"3px"} x={"10"} y={"0"}/>
                    <rect width={"3px"} height={"3px"} x={"10"} y={"10"}/>
                    <rect width={"3px"} height={"3px"} x={"10"} y={"20"}/>

                </g>
                <g>
                    <rect width={"3px"} height={"3px"} x={"20"} y={"0"}/>
                    <rect width={"3px"} height={"3px"} x={"20"} y={"10"}/>
                    <rect width={"3px"} height={"3px"} x={"20"} y={"20"}/>
                </g>
            </svg>
        </div>
    )
}

export default compose(
    connect(null, {toggleIsShowed})
)(HeaderBurger);
