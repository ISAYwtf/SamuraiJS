import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getIsAuth} from "../redux/Auth/auth-selectors";

const mapStateToPropsRedirect = state => ({
    isAuth: getIsAuth(state)
})

export const withAuthRedirect = Component => {
    const RedirectComponent = props =>
        !props.isAuth
            ? <Redirect to={'/login'}/>
            : <Component {...props} />

    return connect(mapStateToPropsRedirect)(RedirectComponent);
}
