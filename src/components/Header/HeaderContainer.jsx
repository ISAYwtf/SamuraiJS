import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    render = () => <Header {...this.props} />
}

const mapStateToProps = state => {
    const {isAuth, login} = state.auth;
    return {isAuth, login}
}

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
