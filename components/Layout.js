import Navbar from "./Navbar";
import Footer from "./Footer";

import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Exo:wght@400;700&display=swap" rel="stylesheet" />

                <title>PokeNext</title>
            </Head>

            <Navbar />
            <main className="main-container">
                {children}
            </main>
            <Footer />
        </>
    )
}