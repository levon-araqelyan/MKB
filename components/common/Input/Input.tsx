import React, {useState} from "react";
import styles from "./Input.module.scss";
import {Form} from 'react-bootstrap';
import {inputType} from "./type";
import cn from "classnames";
import Image from "next/image";

const Input: React.FC<inputType> = (
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

    const [innerType, setInnerType] = useState(type)

    return (
        <Form.Group className={cn("mb-3", styles.wrap)}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                {...res}
                className={styles.input}
                isInvalid={isInvalid}
                type={innerType}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {type === "password" && <div className={styles.passwordImg}>
                <Image src={innerType !== "password" ? "/eyeSlash.svg" : "/eye.svg"}
                       alt="User" width={18} height={18}
                       onMouseDown={() => setInnerType("text")}
                       onMouseUp={() => setInnerType("password")}
                />
            </div>}
            <Form.Control.Feedback type="invalid">
                {isInvalid && errorMessage}
            </Form.Control.Feedback>
        </Form.Group>
    )
}

export default Input