import React, {useState} from "react";
import Authorization from "./Authorization";
import Input from "../common/Input";
import {useForm, Controller} from "react-hook-form";
import styles from "./LoginForms.module.scss";
import { useRouter } from 'next/router'
import {getCookie, setCookie} from "../../utils/utils";

const LoginForms = () => {
    const [helper, setHelper] = useState("")
    const [status, setStatus] = useState("enter")
    const router = useRouter()
    const {register, handleSubmit, formState: {errors}, watch, control} = useForm();

    const content = () => {
        switch (status) {
            case "enter" : {
                return <Authorization title={"Вход"} buttonTitle={"Войти"}>
                    <Controller
                        rules={{
                            required: true,
                        }}
                        control={control}
                        name="login"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                errorMessage={"Введите логин"}
                                type={"text"}
                                value={value}
                                onChange={onChange}
                                label={"Логин"}
                                placeholder={"Введите логин"}
                                isInvalid={errors?.login}
                            />
                        }}
                    />
                    <Controller
                        rules={{
                            required: true,
                        }}
                        control={control}
                        name="password"
                        render={({field: {onChange, onBlur, value, ref}}) => {
                            return <Input
                                isInvalid={errors?.password}
                                errorMessage={"Введите Пароль"}
                                register={register}
                                type={"password"}
                                value={value}
                                onChange={onChange}
                                label={"Пароль"}
                                placeholder={"Введите пароль"}
                            />
                        }}
                    />
                </Authorization>
            }
            case "confirmation" : {
                return <Authorization title={"Подтверждение"} buttonTitle={"Подтвердить"}
                                      description={"Отправлено SMS-сообщение с кодом подтверждения на номер +7 (9**) ***-**-88 "}>
                    <Input register={register} type={"text"} controlId={"confirm"} label={"Код из SMS"} placeholder={"Введите код"}/>
                </Authorization>
            }
            case "changePassword" : {
                return <Authorization title={"Подтверждение"} buttonTitle={"Сохранить"}
                                      description={"У вас временный пароль. Замените его на новый"}>
                    <Input register={register} type={"text"} controlId={"temporaryPassword"} label={"Временный пароль"}
                           placeholder={"Введите временный пароль"}/>
                    <Input register={register} type={"text"} controlId={"newPassword"} label={"Новый пароль"}
                           placeholder={"Введите новый пароль"}/>
                    <Input register={register} type={"text"} controlId={"repeatPassword"} label={"Повторите пароль"}
                           placeholder={"Повторите пароль"}/>
                </Authorization>
            }
            case "recovery" : {
                return <Authorization title={"Восстановление пароля"} buttonTitle={"Выслать ссылку"}
                                      description={"Вышлем ссылку для восстановления доступа на ваш e-mail"}>
                    <Input register={register} type={"email"} controlId={"email"} label={"Ваш e-mail"} placeholder={"Ваш e-mail"}/>
                </Authorization>
            }
        }
    }

    const onSubmit = (data: any) => {
        setCookie("token","00000",{})
        router.push("/applications")
    }

    return (
        <form className={styles.LoginForms} onSubmit={handleSubmit(onSubmit)}>
            {content()}
            {helper && <span>{helper}</span>}
        </form>
    )
}


export default LoginForms