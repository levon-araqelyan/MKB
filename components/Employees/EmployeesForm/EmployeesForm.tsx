import Input from "../../common/Input";
import {Controller} from "react-hook-form";
import styles from "./EmployeesForm.module.scss";
import React from "react";
import EmployeeInformation from "./EmployeeInformation";
import PassportData from "./PassportData";

const EmployeesForm: React.FC<any> = ({control, errors, position}) => {
    return (
        <>
            {position === 1 ? <EmployeeInformation control={control} errors={errors}/> : <PassportData control={control} errors={errors}/>}
        </>
    )
}

export default EmployeesForm