import React from "react";
import Image from 'next/image';
import cn from "classnames";
import Link from 'next/link';
import styles from "./Header.module.scss";
import {deleteCookie} from "../../../utils/utils";

const Header = ({isAuthorized, mb, setIsOpen}) => {
    return (
        <header className={cn(styles.header, {[styles.authorizedHeader]: isAuthorized})}>
            <div className={styles.logoWrap}>
                {isAuthorized && <div className={styles.burger}>
                    <Image src="/burger.svg" alt="Burger" width={16} height={13} onClick={() => setIsOpen(true)}/>
                </div>}
                {(!mb || !isAuthorized) && <Image src="/logo.svg" alt="Bank Logo" width={91} height={16}/>}
            </div>
            <div>
                {
                    isAuthorized ?
                        <div className={styles.out} onClick={() => deleteCookie("token")}>
                            <Link href={"/login"}>
                                <Image src="/out.svg" alt="Log Out" width={167} height={40}/>
                            </Link>
                        </div> :
                        <div>{!mb && <span>Поддержка</span>} <span className={styles.phone}>+7 (900) 456-45-45</span></div>
                }
            </div>
        </header>
    )
}

export default Header