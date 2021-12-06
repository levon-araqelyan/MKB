import React from "react";
import {PrimaryDocumentsType} from "./type";
import {Controller} from "react-hook-form";
import styles from "./PrimaryDocuments.module.scss";
import Input from "../../common/Input";

const PrimaryDocuments: React.FC<any> = ({prePosition, control, errors}) => {
    return (
        <div className={styles.primaryDocuments}>
            {prePosition === 2 &&
            (<div>в процессе разработки </div>)
            }
            {prePosition === 1 && (<div>
                <div className={styles.inputsWrap}>
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="typeOfProduct"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={"Кредитные карты ЛК"}
                                label={"Тип продукта"}
                                isInvalid={errors?.typeOfProduct}
                                disabled
                            />
                        }}
                    />
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="product"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={"Можно больше"}
                                disabled
                                label={"Продукт"}
                                isInvalid={errors?.product}
                            />
                        }}
                    />
                </div>
                <Controller
                    rules={{
                        required: true,
                    }}
                    control={control}
                    name="sum"
                    render={({field: {onChange, onBlur, value, ref}}) => {
                        return <Input
                            errorMessage={"Введите корректную сумму"}
                            type={"text"}
                            value={value}
                            onChange={onChange}
                            placeholder={"Сумма от 30 000 ₽ до 100 000 ₽"}
                            label={"Сумма"}
                            isInvalid={errors?.sum}
                        />
                    }}
                />
            </div>)}

        </div>
    )
}

export default PrimaryDocuments