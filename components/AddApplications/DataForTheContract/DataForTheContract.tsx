import React from "react";
import {DataForTheContractType} from "./type";
import {Controller} from "react-hook-form";
import styles from "./DataForTheContract.module.scss";
import Input from "../../common/Input";
import Checkbox from "../../global/Checkbox";

const DataForTheContract: React.FC<any> = ({prePosition, control, errors}) => {
    return (
        <div className={styles.primaryDocuments}>
            {prePosition === 2 && <div>
             <div>
                 <div className={styles.infoCard}>
                     <p className={styles.title}>Одобренное предложение</p>
                     <span>Продукт</span>
                     <p>Карта «Можно больше»</p>
                     <span>Ставка</span>
                     <p>22% годовых</p>
                     <span>Кредитный лимит</span>
                     <p>90 000 ₽</p>
                 </div>

                 <div className={styles.inputsWrap}>
                     <Controller
                         rules={{
                             required: false,
                         }}
                         control={control}
                         name="serno"
                         render={({field: {onChange, onBlur, value, ref}}) => {
                             return <Input
                                 errorMessage={""}
                                 type={"text"}
                                 value={value}
                                 onChange={onChange}
                                 placeholder={""}
                                 label={"Serno"}
                                 isInvalid={errors?.serno}
                             />
                         }}
                     />
                     <Controller
                         rules={{
                             required: false,
                         }}
                         control={control}
                         name="issueType"
                         render={({field: {onChange, onBlur, value, ref}}) => {
                             return <Input
                                 errorMessage={""}
                                 type={"text"}
                                 value={value}
                                 onChange={onChange}
                                 placeholder={""}
                                 label={"Тип выдачи"}
                                 isInvalid={errors?.issueType}
                             />
                         }}
                     />
                 </div>
            </div>
            </div>}

        </div>
    )
}

export default DataForTheContract
