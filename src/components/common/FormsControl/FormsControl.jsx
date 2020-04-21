import React from "react"
import "./FormsControl.css"
import {Field, reduxForm} from "redux-form";

const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <label className={ hasError ? "error" : "" }>
            {children}
            {hasError ? <span className={"errorMessage"}>{error}</span> : null}
        </label>
    )
};

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/> </FormControl>
    )
};


export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
};


export const createField = (placeholder, name , validators, component, props = {}, text = "") => {
  return (
      <div>
          <Field placeholder={placeholder}
                 name={name}
                 component={component}
                 validate={validators}
                 {...props}
          />
      </div>
  )
};