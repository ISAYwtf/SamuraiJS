import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.getAuth();
    }

    getAuth = () => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me/`, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setUserData(id, email, login);
                }
            })
    }


    render = () => {
        return <Header {...this.props} />
    }
}

const mapStateToProps = state => {
    const {isAuth, login} = state.auth;
    return {isAuth, login}
}

const mapDispatchToProps = {
    setUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
