import React from "react";
import styles from "./LeftMenu.module.scss";
import Link from 'next/link'
import Image from "next/image";
import cn from "classnames";
import {useRouter} from 'next/router';

const LeftMenu = ({user, isOpen, setIsOpen}) => {
    const router = useRouter();
    const links = [
        {src: "/applications.svg", title: "Заявки", href: "/applications"},
        {src: "/employees.svg", title: "Сотрудники", href: "/employees"},
        {src: "/settings.svg", title: "Торговые точки", href: "/outlets"},
        {src: "/settings.svg", title: "Настройки", href: "/settings"}
    ]

    return (
        <div className={cn(styles.leftMenu, {[styles.isOpen]: isOpen})}>
            <div className={styles.content}>
                <div className={styles.userWrap}>
                    <div className={styles.userImg}>
                        <Image src="/defaultUser.png" alt="User" width={18} height={18}/>
                    </div>
                    <div className={styles.userInfo}>
                        <span className={styles.name}>{user.name}</span>
                        <span className={styles.position}>{user.position}</span>
                    </div>
                </div>
                {links.map(link => (
                    <Link key={link.title} href={link.href}
                          className={cn(styles.links, {[styles.activeLink]: router.pathname === link.href})}>
                        <a onClick={() => setIsOpen(false)}
                           className={cn(styles.item, {[styles.activeLink]: router.pathname === link.href})}>
                            <img src={link.src} alt={link.title} width={24} height={18} className={styles.img}/>
                            <p>{link.title}</p>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default LeftMenu