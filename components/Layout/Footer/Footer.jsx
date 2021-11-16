import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span className={styles.contact}>
                2007–2021 ПАО «МОСКОВСКИЙ КРЕДИТНЫЙ БАНК» Генеральная лицензия Банка России №1978 от 06 мая 2016 г.
            </span>
        </footer>
    )
}

export default Footer