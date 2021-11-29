import React, {useEffect, useState} from "react";
import {editingType} from "./type";
import {useForm} from "react-hook-form";
import {Image} from "react-bootstrap";
import Buttons from "../../common/Button";
import EmployeesForm from "../EmployeesForm/EmployeesForm";
import styles from "./Editing.module.scss";
import Router from 'next/router'
import EmployeeInformation from "../EmployeesForm/EmployeeInformation";
import PassportData from "../EmployeesForm/PassportData";

const Editing: React.FC<editingType> = ({type}) => {
    const {handleSubmit, formState: {errors}, watch, control} = useForm(
        {
            defaultValues: {
                tradePoint: "ТЦ Метро",
                role: "Агент",
                surname: "Иванов",
                name: "Иван",
                middleName: "",
                birthData: "28.08.2000",
                birthPlace: "170028, Москва, ул Тверская, д. 345, оф 45.",
                phone: "+7 (900) 343-34-34",
                email: "142342dsfd@mail.com",
                series: "1233",
                number: "343433",
                issuedBy: "УФСИН Московского района города Вологды",
                dateOfIssue: "12.12.2007",
                departmentCode: "123-1232",
                residenceAddressPassword: "170028, Москва, ул Тверская, д. 345, оф 45.",
            }
        }
    );
    const [position, setPosition] = useState(1)

    const onSubmit = (data: any) => {
        if (position === 1) {
            Router.push("/employees/employee?type=editing")
            setPosition(2)
        }
        if (position === 2) {
            Router.push("/employees/employee")
            setPosition(3)
        }
        if (position === 3) {
            Router.push("/employees/employee?type=editing")
            setPosition(2)
        }
        console.log(data)
    }

    useEffect(() => {
        if (type) {
            setPosition(2)
        }
    }, [type])

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {position === 1 && (
                <div>
                    <h2 className={styles.title}>Иванов Иван Иванович</h2>
                    <p className={styles.description}>Сотрудник подключен и может выполнять операции с заявками</p>
                    <div>
                        <span className={styles.label}>Статус</span>
                        <div className={styles.activeWrap}>
                            <p className={styles.desc}>Активный</p>
                            <Image src={""} width={"16px"} height={"16px"} alt={""}/>
                        </div>
                    </div>
                    <div>
                        <span className={styles.label}>Регион</span>
                        <p className={styles.desc}>Московская область</p>
                    </div>
                    <div>
                        <span className={styles.label}>Город</span>
                        <p className={styles.desc}>Москва</p>
                    </div>
                    <div>
                        <span className={styles.label}>Торговая точка</span>
                        <p className={styles.desc}>ТЦ Метро</p>
                    </div>
                    <div>
                        <span className={styles.label}>Роль</span>
                        <p className={styles.desc}>Сотрудник</p>
                    </div>
                    <Buttons className={styles.button} type={"submit"} title={"Редактировать"} variant={"danger"} size={"sm"}/>
                </div>)}
            {position === 2 && (
                <>
                    <div>
                        <h2 className={styles.title}>Информация о сотруднике</h2>
                        <EmployeeInformation control={control} errors={errors}/>
                        <h2 className={styles.title}>Паспортные данные</h2>
                        <PassportData control={control} errors={errors}/>

                    </div>
                    <div className={styles.buttonsWrap}>
                        <Buttons className={styles.buttons} title={"Сохранить"} type={"submit"} variant={"danger"} size={"sm"}/>
                        <Buttons className={styles.buttons} title={"Вернуться"} onClick={() => {
                            setPosition(1)
                            Router.push("/employees/employee")
                        }} variant={"outline-danger"} size={"sm"}/>
                    </div>
                </>)}
            {position === 3 && (
                <>
                    <div className={styles.iconWrap}>
                        <h1>Сотрудник Иванов Иван Иванович сохранен!</h1>
                        <Image src={"/checked.svg"} alt={"Checked"}/>
                    </div>
                    <p className={styles.description}>Теперь он появится в общем списке сотрудников</p>
                    <div className={styles.buttonsWrap}>
                        <Buttons className={styles.buttons} title={"Вернуться"} type={"submit"} variant={"danger"} size={"sm"}/>
                    </div>

                </>
            )}
        </form>
    )
}

export default Editing