import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getAuthLogin, getIsAuth} from "../../redux/Auth/auth-selectors";
import {logout} from "../../redux/Auth/auth-reducer";
import HeaderLogin from "./HeaderLogin";

const HeaderLoginContainer = props => <HeaderLogin {...props} />

const mapStateToProps = state => ({
    isAuth: getIsAuth(state),
    login: getAuthLogin(state)
})

const mapDispatchToProps = {
    logout
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(HeaderLoginContainer);
