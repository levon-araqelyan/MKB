import React, {useCallback, useEffect, useState} from "react"
import ProgressBar from "../global/ProgressBar";
import styles from "./AddApplications.module.scss";
import {useForm} from "react-hook-form";
import Container from "../common/Container";
import Buttons from "../common/Button";
import ApplicationsForm from "./ApplicationsForm";
import {ApplicationsData} from "./constants";
import Router, {useRouter} from "next/router";

const AddApplications = () => {
    const {query} = useRouter()
    const {handleSubmit, formState: {errors}, watch, control, reset} = useForm();
    const [positionData, setPositionData] = useState(ApplicationsData[1])

    const {position, prePosition, title, firstButtonTitle, secondButtonTitle} = positionData

    const onSubmit = (data: any) => {
        if (position === 1 && prePosition === 1) {
            setPositionData(ApplicationsData["1prePosition"])
        }
        if (position === 1 && prePosition === 2) {
            Router.push('?position=2')
        }
        if (position === 2 && prePosition === 1) {
            setPositionData(ApplicationsData["2prePosition"])
        }
        if (position === 2 && prePosition === 2) {
            Router.push('?position=3')
        }
        if (position === 3 && prePosition === 1) {
            setPositionData(ApplicationsData["3prePosition"])
        }
        if (position === 3 && prePosition === 2) {
            setPositionData(ApplicationsData["3nextPosition"])
        }

        if (position === 3 && prePosition === 3) {
            setPositionData(ApplicationsData["4"])
            Router.push('?position=4')
        }
        if (position === 4 && prePosition === 2) {
            setPositionData(ApplicationsData["5"])
            Router.push('?position=5')
        }
        if (position === 5 && prePosition === 2) {
            setPositionData(ApplicationsData["6"])
            Router.push('?position=6')
        }
        if (position === 6 && prePosition === 1) {
            setPositionData(ApplicationsData["6prePosition"])
        }
        if (position === 6 && prePosition === 2) {
            Router.push('/applications')
        }
    }

    useEffect(() => {
        if (query?.position) {
            setPositionData(ApplicationsData[`${query.position}`])
        }
    }, [query?.position])

    const handleBackClick = useCallback(() => {
        console.log(position,prePosition)
        if(position === 1 && prePosition === 2){
            setPositionData(ApplicationsData["1"])
        }
        if(position === 2 && prePosition === 2){
            setPositionData(ApplicationsData["2"])
        }
        if(position === 3 && prePosition === 2){
            setPositionData(ApplicationsData["3"])
        }
        if(position === 3 && prePosition === 3){
            setPositionData(ApplicationsData["3prePosition"])
        }
        if(position === 4 && prePosition === 2){
            console.log("Отказ клиента")
        }
        if(position === 6 && prePosition === 2){
            reset()
            setPositionData(ApplicationsData["1"])
        }
    }, [positionData])

    return (
        <Container title={"Оформление заявки"} breadcrumbList={[]}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={styles.title}>{title}</h2>
                {position < 5 && <ProgressBar
                    sectionLength={6}
                    position={position}
                    prePosition={prePosition}
                />}
                <ApplicationsForm position={position} prePosition={prePosition} control={control} errors={errors}/>
                <div className={styles.buttonsWrap}>
                    <Buttons type={"submit"} title={firstButtonTitle} variant={"danger"} size={"sm"}/>
                    {secondButtonTitle &&
                    <Buttons title={secondButtonTitle} variant={"outline-danger"} onClick={handleBackClick} size={"sm"}/>}
                </div>
            </form>
        </Container>
    )
}

export default AddApplications