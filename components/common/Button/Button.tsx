import {Button} from "react-bootstrap";
import React from "react";
import styles from "./Button.module.scss";
import cn from "classnames";
import {buttonType} from "./type"

const Buttons: React.FC<buttonType> = ({title, onClick, variant,className, ...res}) => {
    return (
        <Button className={cn(styles.button,className)} onClick={onClick} variant={variant} {...res}>
            {title}
        </Button>
    )
}

export default Buttons