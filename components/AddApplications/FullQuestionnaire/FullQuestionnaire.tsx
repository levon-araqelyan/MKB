import React from "react";
import {FullQuestionnaireType} from "./type";
import {Controller} from "react-hook-form";
import styles from "./FullQuestionnaire.module.scss";
import Input from "../../common/Input";
import Checkbox from "../../global/Checkbox";

const FullQuestionnaire: React.FC<any> = ({prePosition, control, errors}) => {
    return (
        <div className={styles.primaryDocuments}>
            {prePosition === 3 && <div>

                <p className={styles.title}>Трудоустройство</p>
                <div className={styles.inputsWrap}>
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="employmentStatus"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Статус трудоустройства"}
                                isInvalid={errors?.employmentStatus}
                            />
                        }}
                    />
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="workExperience"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Стаж работы, лет"}
                                isInvalid={errors?.workExperience}
                            />
                        }}
                    />
                </div>
                <p>Данные о работодателе</p>
                <div className={styles.inputsWrap}>
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="theNameOfTheCompany"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Название компании"}
                                isInvalid={errors?.theNameOfTheCompany}
                            />
                        }}
                    />
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="inn"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"ИНН"}
                                isInvalid={errors?.inn}
                            />
                        }}
                    />
                </div>

                <Controller
                    rules={{
                        required: false,
                    }}
                    control={control}
                    name="employerAddress"
                    render={({field: {onChange, onBlur, value, ref}}) => {
                        return <Input
                            errorMessage={""}
                            type={"text"}
                            value={value}
                            onChange={onChange}
                            placeholder={""}
                            label={"Адрес работодателя"}
                            isInvalid={errors?.employerAddress}
                        />
                    }}
                />
                <p className={styles.title}>Должность</p>

                <div className={styles.inputsWrap}>
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="employmentType"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Тип трудоустройства"}
                                isInvalid={errors?.employmentType}
                            />
                        }}
                    />
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="kindOfActivity"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Вид деятельности"}
                                isInvalid={errors?.kindOfActivity}
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
                        name="positionOccupied"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Занимаемая позиция"}
                                isInvalid={errors?.positionOccupied}
                            />
                        }}
                    />
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="position"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Должность"}
                                isInvalid={errors?.position}
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
                        name="theSalary"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Зарплата"}
                                isInvalid={errors?.theSalary}
                            />
                        }}
                    />
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="workPhone"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Рабочий телефон"}
                                isInvalid={errors?.workPhone}
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
                        name="employmentDate"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"date"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Дата трудоустройства"}
                                isInvalid={errors?.employmentDate}
                            />
                        }}
                    />
                </div>

            </div>}
            {prePosition === 2 &&
            (<div>
                <p className={styles.title}>Адрес</p>

                <Controller
                    rules={{
                        required: false,
                    }}
                    control={control}
                    name="citizenship"
                    render={({field: {onChange, onBlur, value, ref}}) => {
                        return <Input
                            errorMessage={""}
                            type={"text"}
                            value={value}
                            onChange={onChange}
                            placeholder={""}
                            label={"Адрес регистрации"}
                            isInvalid={errors?.citizenship}
                        />
                    }}
                />
                <Checkbox label={"Адрес проживания совпадает с адресом регистрации"} name={"test"}/>
            </div>)}
            {prePosition === 1 && (<div>
                <p className={styles.title}>Персональные данные</p>
                <div className={styles.inputsWrap}>
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="citizenship"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Гражданство"}
                                isInvalid={errors?.citizenship}
                            />
                        }}
                    />
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="placeOfBirth"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Место рождения"}
                                isInvalid={errors?.placeOfBirth}
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
                                label={"Образование"}
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
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Электронная почта"}
                                isInvalid={errors?.dateOfBirth}
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
                        name="proxyPhone"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Телефон доверенного лица"}
                                isInvalid={errors?.proxyPhone}
                            />
                        }}
                    />
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="passwordRecoveryCodeWord"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Кодовое слово для восстановления пароля"}
                                isInvalid={errors?.passwordRecoveryCodeWord}
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
                        name="familyStatus"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Семейное положение"}
                                isInvalid={errors?.familyStatus}
                            />
                        }}
                    />
                    <Controller
                        rules={{
                            required: false,
                        }}
                        control={control}
                        name="amountOfChildren"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={""}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                placeholder={""}
                                label={"Количество детей"}
                                isInvalid={errors?.amountOfChildren}
                            />
                        }}
                    />
                </div>
            </div>)}

        </div>
    )
}

export default FullQuestionnaire
