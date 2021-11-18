import React from "react";
import styles from './Authorization.module.scss';
import {authorizationType} from "./type";
import Buttons from "../../common/Button";

const Authorization: React.FC<authorizationType> = ({title, children,description,buttonTitle,}) => {
    return (
        <div className={styles.authorization}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <div className={styles.children}>
                {children}
            </div>
            <Buttons className={styles.button} title={buttonTitle} onClick={()=>{}} variant={"danger"} size={"sm"} type={"submit"}/>
        </div>
    );
};

export default Authorization;