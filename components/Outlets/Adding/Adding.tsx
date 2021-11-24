import React from "react";
import {useForm} from "react-hook-form";
import {addingType} from "./type";
import Buttons from "../../common/Button";
import styles from "./Adding.module.scss";
import OutletsForm from "../OutletsForm/OutletsForm";

const Adding:React.FC<addingType> = () => {
    const {handleSubmit, formState: {errors}, watch, control} = useForm();

    const onSubmit = (data:any) => {
        console.log(data)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <OutletsForm errors={errors} control={control}/>
            <div className={styles.buttonsWrap}>
                <Buttons className={styles.buttons} title={"Сохранить"} type={"submit"} variant={"danger"} size={"sm"} />
                <Buttons className={styles.buttons} title={"Вернуться"} onClick={()=>{}} variant={"outline-danger"} size={"sm"} />
            </div>
        </form>
    )
}

export default Adding