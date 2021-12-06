import React from "react";
import {SigningOfDocumentsType} from "./type";
import {Controller} from "react-hook-form";
import styles from "./SigningOfDocuments.module.scss";
import Input from "../../common/Input";
import Checkbox from "../../global/Checkbox";
import Buttons from "../../common/Button";
import {Image} from "react-bootstrap";

const SigningOfDocuments: React.FC<any> = ({prePosition, control, errors}) => {
    return (
        <div className={styles.SigningOfDocuments}>
            {prePosition === 2 && <div>
                <div>
                    <div className={styles.downloads}>
                        <h2 className={styles.title}>Загрузка документов</h2>
                        <p><Image src={"/Download.svg"} alt={""}/> Заявление-анкета</p>
                        <p><Image src={"/Download.svg"} alt={""}/> Согласие на взаимодействие с третьими лицами</p>
                        <p><Image src={"/Download.svg"} alt={""}/> Заявление на предоставления комплексного банковского обслуживания</p>
                        <p><Image src={"/Download.svg"} alt={""}/> Индивидуальные условия</p>
                        <Buttons className={styles.but} variant="danger" title={"Скачать все"} size={"sm"}/>
                    </div>
                    <div className={styles.inputsWrap}>
                        <Controller
                            rules={{
                                required: false,
                            }}
                            control={control}
                            name="applicationForm"
                            render={({field: {onChange, onBlur, value, ref}}) => {
                                return <Input
                                    errorMessage={""}
                                    type={"file"}
                                    value={value}
                                    onChange={onChange}
                                    placeholder={""}
                                    label={"Заявление-анкета"}
                                    isInvalid={errors?.applicationForm}
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
                            name="ConsentToInteractWithThirdParties"
                            render={({field: {onChange, onBlur, value, ref}}) => {
                                return <Input
                                    errorMessage={""}
                                    type={"file"}
                                    value={value}
                                    onChange={onChange}
                                    placeholder={""}
                                    label={"Согласие на взаимодействие с третьими лицами"}
                                    isInvalid={errors?.ConsentToInteractWithThirdParties}
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
                            name="applicationBankingServices"
                            render={({field: {onChange, onBlur, value, ref}}) => {
                                return <Input
                                    errorMessage={""}
                                    type={"file"}
                                    value={value}
                                    onChange={onChange}
                                    placeholder={""}
                                    label={"Заявление на предоставления комплексного банковского обслуживания"}
                                    isInvalid={errors?.applicationBankingServices}
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
                            name="individualConditions"
                            render={({field: {onChange, onBlur, value, ref}}) => {
                                return <Input
                                    errorMessage={""}
                                    type={"file"}
                                    value={value}
                                    onChange={onChange}
                                    placeholder={""}
                                    label={"Индивидуальные условия"}
                                    isInvalid={errors?.individualConditions}
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
                            name="photoOfaClientWithaPassport"
                            render={({field: {onChange, onBlur, value, ref}}) => {
                                return <Input
                                    errorMessage={""}
                                    type={"file"}
                                    value={value}
                                    onChange={onChange}
                                    placeholder={""}
                                    label={"Фото клиента с паспортом"}
                                    isInvalid={errors?.photoOfaClientWithaPassport}
                                />
                            }}
                        />

                    </div>
                </div>
            </div>}

        </div>
    )
}

export default SigningOfDocuments
