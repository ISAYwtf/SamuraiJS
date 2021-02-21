import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getIsAuth} from "../redux/Auth/auth-selectors";

const mapStateToPropsRedirect = state => ({
    isAuth: getIsAuth(state)
})

export const withAuthRedirect = Component => {
    class RedirectComponent extends React.Component {
        render = () => {
            return !this.props.isAuth
                ? <Redirect to={'/login'}/>
                : <Component {...this.props} />;
        }
    }

    return connect(mapStateToPropsRedirect)(RedirectComponent);
}
