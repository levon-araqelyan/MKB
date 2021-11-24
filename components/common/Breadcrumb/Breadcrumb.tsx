import React from "react";
import {breadcrumbType} from "./type";
import Link from 'next/link'
import {Image} from "react-bootstrap";
import styles from "./Breadcrumb.module.scss";

const Breadcrumb:React.FC<breadcrumbType> = ({breadcrumbList}) => {
    return (
        <div className={styles.breadcrumb}>
            {breadcrumbList.map(el => (
                <Link href={el.href} key={el.title}>
                    <div  className={styles.items}>
                        <Image src={"/Shape.svg"}/>
                        <span>{el.title}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Breadcrumb