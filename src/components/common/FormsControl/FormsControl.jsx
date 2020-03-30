import React from "react"
import "./FormsControl.css"

const FormControl = ({input, meta, child,  ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <label className={ hasError ? "error" : "" }>
            {props.children}
            {hasError ? <span className={"errorMessage"}>{meta.error}</span> : null}
        </label>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/> </FormControl>
    )
};


export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
};
