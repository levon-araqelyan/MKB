import React from "react";
import {editingType} from "./type";
import {useForm} from "react-hook-form";
import Link from 'next/link'
import {Image} from "react-bootstrap";
import Buttons from "../../common/Button";
import OutletsForm from "../OutletsForm/OutletsForm";
import styles from "./Editing.module.scss";

const Editing: React.FC<editingType> = ({type}) => {
    const {handleSubmit, formState: {errors}, watch, control} = useForm(
        {
            defaultValues: {
                name: "ТЦ Метро",
                region: "Московская область",
                town:"Москва",
                address:"234344, г. Москва, ул. Новокузнецкая д. 13 ст1"
            }
        }
    );

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {type ?
                <>
                    <OutletsForm control={control} errors={errors}/>
                    <div className={styles.buttonsWrap}>
                        <Buttons className={styles.buttons} title={"Сохранить"} type={"submit"} variant={"danger"} size={"sm"}/>
                        <Link href={"trade"}>
                            <Buttons className={styles.buttons} title={"Вернуться"} onClick={() => {
                            }} variant={"outline-danger"} size={"sm"}/>
                        </Link>
                    </div>
                </>

                :
                (<div>
                    <h2 className={styles.title}>LK001001</h2>
                    <div>
                        <span className={styles.label}>Статус</span>
                        <div className={styles.activeWrap}><p className={styles.desc}>Активная</p><Image src={""} width={"16px"}
                                                                                                         height={"16px"}/></div>
                    </div>
                    <div>
                        <span className={styles.label}>Наименование</span>
                        <p className={styles.desc}>ТЦ Метро</p>
                    </div>
                    <div>
                        <span className={styles.label}>Город</span>
                        <p className={styles.desc}>Москва</p>
                    </div>
                    <div>
                        <span className={styles.label}>Регион</span>
                        <p className={styles.desc}>Московская область</p>
                    </div>
                    <div>
                        <span className={styles.label}>Адрес</span>
                        <p className={styles.desc}>234344, г. Москва, ул. Новокузнецкая д. 13 ст1</p>
                    </div>
                    <Link href={"trade?type=test"}>
                        <Buttons className={styles.button} title={"Редактировать"} variant={"danger"} size={"sm"}/>
                    </Link>
                </div>)}
        </form>
    )
}

export default Editing