import React from "react"
import "./FormsControl.css"

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
