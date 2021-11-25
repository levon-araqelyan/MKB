import React from "react";
import {Controller} from "react-hook-form";
import Input from "../../../common/Input";
import styles from "./EmployeeInformation.module.scss"

const EmployeeInformation: React.FC<any> = ({control, errors}) => {
    return (
        <div>
            <div className={styles.inputsWrap}>
                <Controller
                    rules={{
                        required: true,
                    }}
                    control={control}
                    name="tradePoint"
                    render={({field: {onChange, onBlur, value, ref}}) => {
                        return <Input
                            errorMessage={"Введите Торговую точку "}
                            type={"text"}
                            value={value}
                            onChange={onChange}
                            placeholder={"ТЦ Метро"}
                            label={"Торговая точка"}
                            isInvalid={errors?.tradePoint}
                        />
                    }}
                />
                <Controller
                    rules={{
                        required: true,
                    }}
                    control={control}
                    name="role"
                    render={({field: {onChange, onBlur, value, ref}}) => {
                        return <Input
                            errorMessage={"Введите Роль"}
                            type={"text"}
                            value={value}
                            onChange={onChange}
                            placeholder={"Агент"}
                            label={"Роль"}
                            isInvalid={errors?.role}
                        />
                    }}
                />
            </div>
            <div className={styles.inputsWrap}>
                <Controller
                    rules={{
                        required: true,
                    }}
                    control={control}
                    name="surname"
                    render={({field: {onChange, onBlur, value, ref}}) => {
                        return <Input
                            errorMessage={"Введите Фамилию"}
                            type={"text"}
                            value={value}
                            onChange={onChange}
                            label={"Фамилия"}
                            isInvalid={errors?.surname}
                        />
                    }}
                />
                <Controller
                    rules={{
                        required: true,
                    }}
                    control={control}
                    name="name"
                    render={({field: {onChange, onBlur, value, ref}}) => {
                        return <Input
                            errorMessage={"Введите Имя"}
                            type={"text"}
                            value={value}
                            onChange={onChange}
                            label={"Имя"}
                            isInvalid={errors?.name}
                        />
                    }}
                />
            </div>

            <div className={styles.inputsWrap}>
                <Controller
                    rules={{
                        required: true,
                    }}
                    control={control}
                    name="middleName"
                    render={({field: {onChange, onBlur, value, ref}}) => {
                        return <Input
                            errorMessage={"Введите Отчество"}
                            type={"text"}
                            value={value}
                            onChange={onChange}
                            label={"Отчество"}
                            isInvalid={errors?.middleName}
                        />
                    }}
                />
                <Controller
                    rules={{
                        required: true,
                    }}
                    control={control}
                    name="birthData"
                    render={({field: {onChange, onBlur, value, ref}}) => {
                        return <Input
                            errorMessage={"Введите Дату рождения"}
                            type={"text"}
                            value={value}
                            onChange={onChange}
                            placeholder={"Выберите дату"}
                            label={"Дата рождения"}
                            isInvalid={errors?.birthData}
                        />
                    }}
                />
            </div>
            <Controller
                rules={{
                    required: true,
                }}
                control={control}
                name="birthPlace"
                render={({field: {onChange, onBlur, value, ref}}) => {
                    return <Input
                        errorMessage={"Введите Место рождения"}
                        type={"text"}
                        value={value}
                        onChange={onChange}
                        label={"Дата рождения"}
                        isInvalid={errors?.birthPlace}
                    />
                }}
            />

            <Controller
                rules={{
                    required: true,
                }}
                control={control}
                name="residenceAddress"
                render={({field: {onChange, onBlur, value, ref}}) => {
                    return <Input
                        errorMessage={"Введите Адрес проживания"}
                        type={"text"}
                        value={value}
                        onChange={onChange}
                        label={"Адрес проживания"}
                        isInvalid={errors?.residenceAddress}
                    />
                }}
            />
            <div className={styles.inputsWrap}>
                <Controller
                    rules={{
                        required: true,
                    }}
                    control={control}
                    name="phone"
                    render={({field: {onChange, onBlur, value, ref}}) => {
                        return <Input
                            errorMessage={"Введите Телефон"}
                            type={"text"}
                            value={value}
                            onChange={onChange}
                            label={"Телефон"}
                            isInvalid={errors?.phone}
                        />
                    }}
                />
                <Controller
                    rules={{
                        required: true,
                    }}
                    control={control}
                    name="email"
                    render={({field: {onChange, onBlur, value, ref}}) => {
                        return <Input
                            errorMessage={"Введите E-mail"}
                            type={"text"}
                            value={value}
                            onChange={onChange}
                            label={"E-mail"}
                            isInvalid={errors?.email}
                        />
                    }}
                />
            </div>
        </div>
    )
}

export default EmployeeInformation