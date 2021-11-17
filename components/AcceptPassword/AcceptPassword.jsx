import ButtonDefault from "../common/Button/Button";
import InputDefault from "../common/Input/Input";
import Form from 'react-bootstrap/Form';
import styles from './AcceptPassword.module.scss';
import React, { useState, useEffect } from 'react';




function AcceptPassword() {

    const [seconds, setSeconds] = React.useState(40);
    React.useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setSeconds('Повторно отправить?');
        }
    });


    return (
        <div className={styles.acceptPassword}>
            <Form.Label className={styles.wropperHead}>Подтверждение</Form.Label>
            <p>Отправлено SMS-сообщение с кодом подтверждения на номер +7 (9**) ***-**-88</p>
            <InputDefault
                className={styles.inputPass}
                placeholder='Введите код'
                title='Код из SMS' />
            <ButtonDefault
                className={styles.btnAccept}
                type={'danger'}
                title='Подтвердить'
                onClick={() => alert(1)} />
            <p>Запросить код повторно можно через {seconds} секунд</p>
        </div>
    )
};

export default AcceptPassword;