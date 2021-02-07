import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field type="text" placeholder={"Login"} name={"login"} component={"input"}/></div>
            <div><Field type="password" placeholder={"Password"} name={"password"} component={"input"}/></div>
            <label><Field type="checkbox" component={"input"} name={"rememberMe"}/>Remember Me</label>
            <div><Field component={"button"} name={"submitLogin"}>Login</Field></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm);

const Login = (props) => {
    const onSubmit = formData => {
        console.log(formData);
    }

    return (
        <div>
            <h2>Sign in</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;
