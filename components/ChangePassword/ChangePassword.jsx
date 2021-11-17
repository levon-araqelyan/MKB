import ButtonDefault from "../common/Button/Button";
import InputDefault from "../common/Input/Input";
import Form from 'react-bootstrap/Form';
import styles from './ChangePassword.module.scss'


function ChangePassword() {
    return (
        <div className={styles.changePassword}>
            <Form.Label className={styles.wropperHead}>Измените пароль</Form.Label>
            <p>У вас временный пароль. Замените его на новый</p>
            <InputDefault
                className={styles.inputPass}
                placeholder='Введите временный пароль'
                title='Временный пароль' />
            <InputDefault
                className={styles.inputPass}
                placeholder='Введите новый пароль'
                title='Новый пароль' />
            <InputDefault
                className={styles.inputPass}
                placeholder='Повторите пароль'
                title='Повторите пароль' />
            <ButtonDefault
                className={styles.btnAccept}
                type={'danger'}
                title='Сохранить'
                onClick={() => alert(1)} />
        </div>


    )
}

export default ChangePassword;