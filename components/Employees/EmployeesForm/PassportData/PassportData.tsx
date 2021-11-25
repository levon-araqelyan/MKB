import React from "react";
import {Controller} from "react-hook-form";
import Input from "../../../common/Input";
import styles from "./PassportData.module.scss";

const PassportData: React.FC<any> = ({control, errors}) => {
    return (
        <div>
            <div className={styles.inputsWrap}>
                <Controller
                    rules={{
                        required: true,
                    }}
                    control={control}
                    name="series"
                    render={({field: {onChange, onBlur, value, ref}}) => {
                        return <Input
                            errorMessage={"Введите Серию"}
                            type={"text"}
                            value={value}
                            onChange={onChange}
                            label={"Серия"}
                            isInvalid={errors?.series}
                        />
                    }}
                />
                <Controller
                    rules={{
                        required: true,
                    }}
                    control={control}
                    name="number"
                    render={({field: {onChange, onBlur, value, ref}}) => {
                        return <Input
                            errorMessage={"Введите Номер"}
                            type={"text"}
                            value={value}
                            onChange={onChange}
                            label={"Номер"}
                            isInvalid={errors?.number}
                        />
                    }}
                />
            </div>
            <Controller
                rules={{
                    required: true,
                }}
                control={control}
                name="issuedBy"
                render={({field: {onChange, onBlur, value, ref}}) => {
                    return <Input
                        errorMessage={"Введите Кем выдан"}
                        type={"text"}
                        value={value}
                        onChange={onChange}
                        label={"Кем выдан"}
                        isInvalid={errors?.issuedBy}
                    />
                }}
            />
            <div className={styles.inputsWrap}>
                <Controller
                    rules={{
                        required: true,
                    }}
                    control={control}
                    name="departmentCode"
                    render={({field: {onChange, onBlur, value, ref}}) => {
                        return <Input
                            errorMessage={"Введите Код подразделения"}
                            type={"text"}
                            value={value}
                            onChange={onChange}
                            label={"Код подразделения"}
                            isInvalid={errors?.departmentCode}
                        />
                    }}
                />
                <Controller
                    rules={{
                        required: true,
                    }}
                    control={control}
                    name="dateOfIssue"
                    render={({field: {onChange, onBlur, value, ref}}) => {
                        return <Input
                            errorMessage={"Введите Дата выдачи"}
                            type={"text"}
                            value={value}
                            onChange={onChange}
                            label={"Дата выдачи"}
                            isInvalid={errors?.dateOfIssue}
                        />
                    }}
                />
            </div>
            <Controller
                rules={{
                    required: true,
                }}
                control={control}
                name="residenceAddressPassword"
                render={({field: {onChange, onBlur, value, ref}}) => {
                    return <Input
                        errorMessage={"Введите Адрес проживания"}
                        type={"text"}
                        value={value}
                        onChange={onChange}
                        label={"Адрес проживания"}
                        isInvalid={errors?.residenceAddressPassword}
                    />
                }}
            />
        </div>
    )
}

export default PassportData