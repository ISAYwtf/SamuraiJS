import React from "react";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/Auth/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from "./Login.module.css";
import Button from "../common/Button";
import {reduxForm, Field} from "redux-form";
import {getAuthCaptcha, getIsAuth} from "../../redux/Auth/auth-selectors";

const LoginForm = ({handleSubmit, captchaUrl, error}) =>
    <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.field}>
            <Field placeholder={"Email"} name={"email"}
                   validate={[required]} component={Input}/>
        </div>
        <div className={classes.field}>
            <Field type="password" placeholder={"Password"} name={"password"}
                   validate={[required]}
                   component={Input}/>
        </div>
        <label className={classes.rememberMe}>
            <Field component={Input} name={"rememberMe"} type={"checkbox"}/>
            <p>Remember Me</p>
        </label>
        {captchaUrl
            ? <div className={classes.captcha}>
                <img src={captchaUrl}/>
                <Field component={Input} placeholder={"Input symbols from the image"} name={"captcha"}/>
            </div>
            : ""}
        {error
            ? <div className={classes.error}>{error}</div>
            : ""
        }
        <div>
            <Button>Login</Button>
        </div>
    </form>

const LoginFormRedux = reduxForm({form: "login"})(LoginForm);

const Login = ({login, isAuth, captchaUrl}) => {
    const submitData = formData => {
        const {email, password, rememberMe, captcha} = formData;
        login(email, password, rememberMe, captcha);
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>;
    }

    return (
        <div className={`component--wrap`}>
            <h2 className={classes.formTitle}>Sign in</h2>
            <LoginFormRedux onSubmit={submitData} captchaUrl={captchaUrl}/>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: getIsAuth(state),
    captchaUrl: getAuthCaptcha(state)
})

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
