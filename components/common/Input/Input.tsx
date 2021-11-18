import React from "react";
import styles from "./Input.module.scss";
import {Form} from 'react-bootstrap';
import {inputType} from "./type";

const Input:React.FC<inputType> = (
    {
        label,
        type,
        placeholder,
        controlId,
        className,
        value,
        onChange,
        isInvalid,
        errorMessage,
        ...res
    }) => {

    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                {...res}
                className={styles.input}
                isInvalid={isInvalid}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <Form.Control.Feedback type="invalid">
                {isInvalid && errorMessage}
            </Form.Control.Feedback>
        </Form.Group>
    )
}

export default Input