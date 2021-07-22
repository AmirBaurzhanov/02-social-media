export const TextArea = ({ input, meta, ...props }) => {
  // debugger
  const hasError = meta.touched && meta.error
  return (
    <div>
      {hasError && <div className="alert alert-danger" role="alert"> {meta.error} </div>}
      <div className="col-md-4">
        <textarea {...input} {...props} type="text" className="form-control" id="validationCustom05" required />
        <div className="valid-feedback">
          Looks good!
        </div>
      </div>
      <div className="col-12 mt-1">
        <button className="btn btn-primary" type="submit">Submit</button>
      </div>
    </div>
  )
}

export const Input = ({ input, meta, ...props }) => {
  return (
    <div>
      <div>
        <input {...input} {...props}/>
      </div>
    </div>
  )
}