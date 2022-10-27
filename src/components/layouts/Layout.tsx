import Head from "next/head";
import { FC } from "react";
//import React from 'react';

type Props = {
    children: React.ReactNode
    title?: string
 }

export const Layout:FC<Props> = ({ children, title}) => {
    return(
        <>
            <Head>
                <title>{ title || "Home"} </title>
                <meta name="author" content="x-eight"></meta>
                <meta name="description" content="Information about profile"></meta>
                <meta name="keywords" content="xxxxx, profile, cv"></meta>
            </Head>
            {/* Navbar */}

            <main>
                { children }
            </main>
        </>
    )
}