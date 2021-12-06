import React from "react";
import {ClientInformationType} from "./type";
import {Controller} from "react-hook-form";
import styles from "./ClientInformation.module.scss";
import Input from "../../common/Input";
import RadioButton from "../../global/RadioButton";
import Buttons from "../../common/Button";

const ClientInformation: React.FC<any> = ({prePosition, control, errors}) => {
    return (
        <div className={styles.primaryDocuments}>
            {prePosition === 2 &&
            (<div>
                <p className={styles.title}>Паспортные данные</p>
                <div className={styles.inputsWrap}>
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="passportSeries"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Серия паспорта"}
                                isInvalid={errors?.passportSeries}
                            />
                        }}
                    />
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="passwordNumber"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Номер паспорта"}
                                isInvalid={errors?.passwordNumber}
                            />
                        }}
                    />
                </div>
                <div className={styles.inputsWrap}>
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="dataOfIssue"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"date"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Дата выдачи"}
                                isInvalid={errors?.dataOfIssue}
                            />
                        }}
                    />
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="departmentCode"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Код подразделения"}
                                isInvalid={errors?.departmentCode}
                            />
                        }}
                    />

                </div>
                <Controller
                    rules={{
                        required: false,
                    }}
                    control={control}
                    name="issuedBy"
                    render={({field: {onChange, onBlur, value, ref}}) => {
                        return <Input
                            errorMessage={""}
                            type={"text"}
                            value={value}
                            onChange={onChange}
                            placeholder={""}
                            label={"Кем выдан"}
                            isInvalid={errors?.issuedBy}
                        />
                    }}
                />
                <p className={styles.title}>Подтверждение информации</p>
                <div className={styles.sendWrap}>
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="phone"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                className={styles.smallInput}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Телефон"}
                                isInvalid={errors?.phone}
                            />
                        }}
                    />
                    <Buttons title={"Отправить код"} variant={"danger"} size={"sm"}/>
                </div>
                <div className={styles.sendWrap}>
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="codeSMS"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                className={styles.smallInput}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Код из СМС"}
                                isInvalid={errors?.codeSMS}
                            />
                        }}
                    />
                </div>
            </div>)}
            {prePosition === 1 && (<div>
                <p className={styles.title}>Личные данные</p>
                <p className={styles.radioLabel}>Пол</p>
                <div className={styles.radioButton}>
                    <RadioButton label={"Мужской"} name={"mean"}/>
                    <RadioButton label={"Женский"} name={"mean"}/>
                </div>
                <div className={styles.inputsWrap}>
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="surname"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Фамилия"}
                                isInvalid={errors?.surname}
                            />
                        }}
                    />
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="name"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Имя"}
                                isInvalid={errors?.name}
                            />
                        }}
                    />
                </div>
                <div className={styles.inputsWrap}>
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="middleName"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Отчество"}
                                isInvalid={errors?.middleName}
                            />
                        }}
                    />
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="dateOfBirth"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"date"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Дата рождения"}
                                isInvalid={errors?.dateOfBirth}
                            />
                        }}
                    />
                </div>
            </div>)}


        </div>
    )
}

export default ClientInformation