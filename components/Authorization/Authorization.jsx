import ButtonDefault from "../common/Button/Button";
import Input from "../common/Input/Input";
import LinkTest from "../common/Link/Link";
import Form from 'react-bootstrap/Form';
import styles from './Authorization.module.scss'




function Authorization() {


    return (

        <div className={styles.wropperAuth}>

            <Form.Label className={styles.wropperHead}>Вход</Form.Label>
            <Input className={styles.inputAuth}
                placeholder='Логин'
                title='Логин' />
            <Input className={styles.inputAuth}
                placeholder='Пароль'
                title='Пароль' />
            <ButtonDefault className={styles.buttonAuth} type={'danger'} title='Вход' onClick={() => alert(1)} />
            <LinkTest onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} title='Забыли пароль?' />

        </div>
    );
};

export default Authorization;