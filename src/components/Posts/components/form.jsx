import { Field, reduxForm } from "redux-form"


const form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <p>
                <Field name={"textarea"} component={"textarea"}
                    placeholder="Ваше сообщение"
                    cols="50" rows="4" />
            </p>
            <button
                className="btn btn-outline-primary">Написать
            </button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({ form: 'addNewPost' })(form);


export default AddPostFormRedux;