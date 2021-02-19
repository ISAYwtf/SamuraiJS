import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from "./Login.module.css";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><Field type="text" placeholder={"Email"} name={"email"} validate={[required]} component={Input}/></div>
            <div><Field type="password" placeholder={"Password"} name={"password"} validate={[required]}
                        component={Input}/></div>
            <label><Field component={Input} type="checkbox" name={"rememberMe"}/>Remember Me</label>
            {captchaUrl
                ? <div>
                    <img src={captchaUrl}/>
                    <Field component={Input} placeholder={"Input symbols from the image"} name={"captcha"}
                           type={"text"}/>
                </div>
                : ""}
            {error
                ? <div className={classes.error}>{error}</div>
                : ""
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = formData => {
        const {email, password, rememberMe, captcha} = formData;
        login(email, password, rememberMe, captcha);
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>;
    }

    return (
        <div>
            <h2>Sign in</h2>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
