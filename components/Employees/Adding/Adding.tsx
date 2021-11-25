import React, {useCallback, useState} from "react";
import {useForm} from "react-hook-form";
import {addingType} from "./type";
import Buttons from "../../common/Button";
import styles from "./Adding.module.scss";
import EmployeesForm from "../EmployeesForm/EmployeesForm";
import ProgressBar from "../ProgressBar";
import Router from 'next/router'
import Modals from "../../common/Modal";

const Adding: React.FC<addingType> = () => {
    const {handleSubmit, formState: {errors}, watch, control,reset } = useForm();
    const [positionData, setPositionData] = useState({position: 1, title: "Информация о сотруднике", buttonTitle: "Далее"})
    const [isOpenModal, setIsOpenModal] = useState(false)

    const onSubmit = (data: any) => {
        console.log(data,555)
        if(positionData.position === 1){
            setPositionData({position: 2, title: "Паспортные данные", buttonTitle: "Сохранить"})
        }
        if(positionData.position === 2){
            setPositionData({position: 3, title: "Сотрудник Иванов Иван Иванович сохранен!", buttonTitle: "Вернуться"})
        }
        if(positionData.position === 3){
            setPositionData({position: 2, title: "Паспортные данные", buttonTitle: "Сохранить"})
        }
    }

    const handleBackClick = useCallback(() => {
        if(positionData.position === 2 || 3){
            setPositionData({position: 1, title: "Информация о сотруднике", buttonTitle: "Далее"})
        }
        if(positionData.position === 1){
            setIsOpenModal(true)
        }
        if(positionData.position === 3){
            reset()
        }
    },[positionData])

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Modals
                title={"Вернуться"}
                firstButtonTitle={"Вернуться"}
                secondButtonTitle={"Удалить"}
                description={"Вы действительно хотите выйти из формы? Данные не будут сохранены"}
                onCloseModal={() => setIsOpenModal(false)}
                secondButtonAction={()=> Router.push("/employees")}
                firstButtonAction={()=> setIsOpenModal(false)}
                show={isOpenModal}
            />
            <h2 className={styles.title}>{positionData.title}</h2>
            {positionData.position !== 3 && <ProgressBar position={positionData.position}/>}
            {positionData.position !== 3 && <EmployeesForm errors={errors} control={control} position={positionData.position}/>}
            <div className={styles.buttonsWrap}>
                <Buttons className={styles.buttons} title={positionData.buttonTitle} type={"submit"} variant={"danger"} size={"sm"}/>
                <Buttons className={styles.buttons} title={positionData.position !== 3 ? "Вернуться" : "Добавить еще"} onClick={() => handleBackClick()} variant={"outline-danger"} size={"sm"}/>
            </div>
        </form>
    )
}

export default Adding