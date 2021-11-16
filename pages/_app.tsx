import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout/Layout";
import Router from 'next/router'
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const user = {name: "Иван К.", position: "Агент", isAuthorized: true}

  useEffect(() => {
    Router.push(user.isAuthorized === false ? '/login' : "/applications")
  },[]);

  return <Layout user={user}><Component {...pageProps}/></Layout>
}

export default MyApp
