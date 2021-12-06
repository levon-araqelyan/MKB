import {Form} from 'react-bootstrap';
import React from "react";
import {CheckboxType} from "./type";
import styles from "./Checkbox.module.scss";

const Checkbox:React.FC<CheckboxType> = ({label,name}) =>{
    return (
        <Form className={styles.checkbox}>
            <Form.Check
                type="switch"
                id="custom-switch"
                name={name}
                label={label}
            />
        </Form>
    )
}

export default Checkbox