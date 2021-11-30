import {Alert} from "react-bootstrap";
import React from "react";
import styles from "./Alert.module.scss";
import cn from "classnames";
import {alertType} from "./type"

inteleji //  Mypassword2020

out_arakelyan
frmvm-vbo8.mcb.ru

пароль: IK)WSHL8

///////////////////////////////////////////////////////

Redmine: http://redmine.itq-group.com/
    логин:  l.arakelyan
пароль: JK56s636dss22ss


////////////////////////////////////////////////////

Учётная запись корпоративной почты:
    Логин: l.arakelyan@itq-group.com
Пароль: JK56s636dss22ss


Web-интерфейс почты https://mail.yandex.ru/
    Настройка почтовых клиентов https://yandex.ru/support/mail/mail-clients/microsoft-outlook.html

///////////////////////////////////////////////////

    admin

login adm_out_arakelyan

///////////////////////////////////////////////////

https://www.figma.com/file/JyDAgkXxT3PBealLAQ7aJz/%D0%9B%D0%9A-%D0%90%D0%B3%D0%B5%D0%BD%D1%82%D0%B0?node-id=69%3A25811

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