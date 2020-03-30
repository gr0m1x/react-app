import React from "react";
import "./Login.css";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
// debugger
    return (
        <form onSubmit={props.handleSubmit} className={"form-login"} action="">
            <label>
                <Field type="text" placeholder={"Login"} component={"input"} name={"login"}/>
            </label>
            <label>
                <Field type="password" placeholder={"Password"} component={"input"} name={"password"}/>
            </label>
            <label>
                <Field type="checkbox" component={"input"} name={"rememberMe "}/> remember me
            </label>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => { // получает данные из формы через hoc handleSubmit
        console.log(formData)
    };
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;