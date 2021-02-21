import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/Auth/auth-reducer";
import {getIsAuth, getAuthLogin} from "../../redux/Auth/auth-selectors";

class HeaderContainer extends React.Component {
    render = () => <Header {...this.props} />
}

const mapStateToProps = state => ({
    isAuth: getIsAuth(state),
    login: getAuthLogin(state)
})

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
