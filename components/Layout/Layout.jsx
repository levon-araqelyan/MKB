import React, {useState} from "react";
import LeftMenu from "../LeftMenu/LeftMenu";
import Header from "./Header";
import Footer from "./Footer";
import cn from "classnames";
import styles from "./Layout.module.scss";
import {useMediaQuery} from "react-responsive";
import {Button} from "react-bootstrap";

const Layout = ({children, user}) => {
    const md = useMediaQuery({maxWidth: 768})
    const mb = useMediaQuery({maxWidth: 567})
    const [isOpen,setIsOpen] = useState(false)

    return (
        <div className={cn({[styles.container]: user.isAuthorized})}>
            {user.isAuthorized && <LeftMenu user={user} isOpen={isOpen} setIsOpen={setIsOpen}/>}
            <div className={styles.wrapper}>
                <Header isAuthorized={user.isAuthorized} mb={mb} setIsOpen={setIsOpen}/>
                {children}
            </div>
            {!user.isAuthorized && <Footer />}
        </div>
    )
}

export default Layout