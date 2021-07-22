import { Field, reduxForm } from "redux-form"
import requiredField from "../../../utils/validators/valid";
import { TextArea } from "../../commons/FormsControl";


const form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <p>
                <Field validate={requiredField} name={"textarea"} component={TextArea}
                    placeholder="Your post"
                    cols="50" rows="4" />
            </p>
        </form>
    )
}

const AddPostFormRedux = reduxForm({ form: 'addNewPost' })(form);


export default AddPostFormRedux;