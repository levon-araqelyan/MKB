import {Alert} from "react-bootstrap";
import React from "react";
import styles from "./Alert.module.scss";
import cn from "classnames";
import {alertType} from "./type"

const Alerts: React.FC<alertType> = ({className, onClose, title, description,type}) => {
    return (
        <Alert className={className} variant={type} onClose={() => onClose()} dismissible>
            <Alert.Heading>{title}</Alert.Heading>
            <p>
                {description}
            </p>
        </Alert>
    )
}

export default Alerts