import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsRedirect = state => ({
    isAuth: state.auth.isAuth
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
