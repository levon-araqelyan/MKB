import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout/Layout";
import Router from 'next/router'
import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {getCookie} from "../utils/utils";

function MyApp({ Component, pageProps }: AppProps) {
  const user = {name: "Иван К.", position: "Агент"}
  const isAuthorized = getCookie("token")

  console.log(isAuthorized,"isAuthorized")
  useEffect(() => {
    Router.push(!isAuthorized ? '/login' : "/applications")
  },[]);

  return typeof window === 'object' ? <Layout user={{...user,isAuthorized: isAuthorized}}><Component {...pageProps}/></Layout> : null
}

export default MyApp