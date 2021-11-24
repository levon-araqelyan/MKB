import React from "react";
import {containerType} from "./type";
import cn from "classnames";
import styles from "./Container.module.scss";
import Breadcrumb from "../Breadcrumb";

const Container:React.FC<containerType> = ({title,children,className,breadcrumbList}) => {
    return (
        <div className={cn(styles.container,className)}>
            <Breadcrumb breadcrumbList={breadcrumbList}/>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

export default Container