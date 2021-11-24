import Router, {useRouter} from "next/router";
import React, {useCallback, useState} from "react";
import Adding from "../../components/Outlets/Adding";
import Editing from "../../components/Outlets/Editing";
import Container from "../../components/common/Container/Container";

export default function OutletsQuery() {
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
            return {title: "Редактирование" , breadcrumbList: [{href: "trade",title:"К торговой точке"}]}
        }
        if(query.id === "adding"){
            return {title: "Новая точка" , breadcrumbList: [{href: "/outlets",title:"К списку торговых точек"}]}
        }
        if(query.id === "trade"){
            return {title: "Торговая точка" , breadcrumbList: [{href: "/outlets",title:"К списку торговых точек"}]}
        }
        return {title: "" , breadcrumbList: [{href: "",title:""}]}
    },[query])

    return (
        <Container title={getParams().title} breadcrumbList={getParams().breadcrumbList}>
            {content()}
        </Container>
    )
}