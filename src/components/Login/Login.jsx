import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field type="text" placeholder={"Login"} name={"login"} validate={[required]} component={Input}/></div>
            <div><Field type="password" placeholder={"Password"} name={"password"} validate={[required]} component={Input}/></div>
            <label><Field type="checkbox" component={Input} name={"rememberMe"}/>Remember Me</label>
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
