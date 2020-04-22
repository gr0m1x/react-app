import React from "react";
import "./Login.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={"form-login"} action="">
            <label>
                <Field type="text" placeholder="Email" name="email"
                       component={Input}
                       validate={[required]}/>
            </label>
            <label>
                <Field type="password" placeholder="Password" name="password"
                       component={Input}
                       validate={[required]}/>
            </label>
            <label>
                <Field type="checkbox" name="rememberMe"
                       component={Input}
                       validate={[]}/> remember me
            </label>

            {captchaUrl &&
                <label>
                    <img className={"login-captcha"} src={captchaUrl} alt="captcha"/>
                    <Field type="text" name="captcha"
                        component={Input}
                        validate={[required]}/> Enter captcha on image
                </label>
            }

            {error && <div className="error">{error}</div>}
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
        props.login(value.email, value.password, value.rememberMe, value.captcha)
    };

    if (props.isAuth) {
        return <Redirect to="/profile"/> // если залогинен редиректид на страницу Профиля
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth // Проверка Залогиген или нет?
});

export default connect(mapStateToProps, {login})(Login);