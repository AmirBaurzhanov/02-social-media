import { Field, reduxForm } from "redux-form";
import requiredField from "../../../utils/validators/valid";
import { Input } from "../../commons/FormsControl";


const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                {props.error && <div className="alert alert-danger" role="alert"> {props.error} </div>}
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <Field validate={requiredField} name={"password"} component={Input} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <Field validate={requiredField} name={"login"} component={Input} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autoComplete="true" required />
                </div>
                <div className="form-check">
                    <Field name={"rememberMe"} component={Input} type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


export default LoginReduxForm;