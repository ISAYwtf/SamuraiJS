import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getMe} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount = () => this.props.getMe();

    render = () => <Header {...this.props} />
}

const mapStateToProps = state => {
    const {isAuth, login} = state.auth;
    return {isAuth, login}
}

const mapDispatchToProps = {getMe}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
