import { connect } from "react-redux";
import { loginThunkCreator } from "../../redux/authReducer"
import LoginReduxForm from "./Components/LoginForm"

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.password, formData.login, formData.rememberMe)
    }
    return (
        <div className="container">
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginCont = connect(null, {loginThunkCreator})(Login)

export default LoginCont;