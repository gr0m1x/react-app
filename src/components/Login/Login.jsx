import React from "react";
import "./Login.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={"form-login"} action="">
            <label>
                <Field type="text" placeholder="Login" component={Input} name="login" validate={[required]}/>
            </label>
            <label>
                <Field type="password" placeholder="Password" component={Input} name="password" validate={[required]}/>
            </label>
            <label>
                <Field type="checkbox" component={Input} name="rememberMe" validate={[required]}/> remember me
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
    const onSubmit = (value) => { // получает данные из формы через hoc handleSubmit
        console.log(value)
    };
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;