import {Form} from 'react-bootstrap';
import React from "react";
import {RadioButtonType} from "./type";
import styles from "./RadioButton.module.scss";

const RadioButton:React.FC<RadioButtonType> = ({label,name}) =>{
    return (
        <Form.Check
            className={styles.radioButton}
            type="radio"
            label={label}
            name={name}
            checked={true}
            id="formHorizontalRadios1"
        />
    )
}

export default RadioButton