import Input from "../../common/Input";
import {Controller} from "react-hook-form";
import styles from "./OutletsForm.module.scss";
import React from "react";

const OutletsForm: React.FC<any> = ({control, errors}) => {
    return (
        <>
            <Controller
                rules={{
                    required: true,
                }}
                control={control}
                name="name"
                render={({field: {onChange, onBlur, value, ref}}) => {
                    return <Input
                        errorMessage={"Введите Наименование"}
                        type={"text"}
                        value={value}
                        onChange={onChange}
                        label={"Наименование"}
                        isInvalid={errors?.name}
                    />
                }}
            />
            <div className={styles.inputsWrap}>
                <Controller
                    rules={{
                        required: true,
                    }}
                    control={control}
                    name="region"
                    render={({field: {onChange, onBlur, value, ref}}) => {
                        return <Input
                            errorMessage={"Введите Регион"}
                            type={"text"}
                            value={value}
                            onChange={onChange}
                            label={"Регион"}
                            placeholder={"Выберите регион"}
                            isInvalid={errors?.region}
                        />
                    }}
                />
                <Controller
                    rules={{
                        required: true,
                    }}
                    control={control}
                    name="town"
                    render={({field: {onChange, onBlur, value, ref}}) => {
                        return <Input
                            errorMessage={"Введите Город"}
                            type={"text"}
                            value={value}
                            onChange={onChange}
                            label={"Город"}
                            isInvalid={errors?.town}
                        />
                    }}
                />
            </div>
            <Controller
                rules={{
                    required: true,
                }}
                control={control}
                name="address"
                render={({field: {onChange, onBlur, value, ref}}) => {
                    return <Input
                        errorMessage={"Введите Адрес"}
                        type={"text"}
                        value={value}
                        onChange={onChange}
                        label={"Адрес"}
                        isInvalid={errors?.address}
                        placeholder={"Индекс, Город, Улица, дом, помещение"}
                    />
                }}
            />
        </>
    )
}

export default OutletsForm