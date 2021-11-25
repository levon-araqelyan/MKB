import Router, {useRouter} from "next/router";
import React, {useCallback, useState} from "react";
import Adding from "../../components/Employees/Adding";
import Container from "../../components/common/Container/Container";
import Editing from "../../components/Employees/Editing";

export default function EmployeesQuery() {
    const {query} = useRouter()

    const content = useCallback(() => {
        switch (query.id) {
            case "adding" : {
                return <Adding />
            }
            case "trade" : {
                return <Editing type={query.type}/>
            }
            default : {
                if (query.id) {
                    Router.push('/404')
                }
                return null
            }
        }
    }, [query])

    const getParams = useCallback(()=>{
        if(query.type){
            return {title: "Редактирование" , breadcrumbList: [{href: "trade",title:"К сотруднику"}]}
        }
        if(query.id === "adding"){
            return {title: "Новый сотрудник" , breadcrumbList: [{href: "/employees",title:"К списку сотрудников"}]}
        }
        if(query.id === "employee"){
            return {title: "Сотрудник" , breadcrumbList: [{href: "/employees",title:"К списку сотрудников"}]}
        }
        return {title: "" , breadcrumbList: [{href: "",title:""}]}
    },[query])

    return (
        <Container title={getParams().title} breadcrumbList={getParams().breadcrumbList}>
            {content()}
        </Container>
    )
}