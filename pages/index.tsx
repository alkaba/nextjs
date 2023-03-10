import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@styles/Home.module.css'
import Div from "@components/Div";

const inter = Inter({ subsets: ['latin'] })

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Div />
            </main>
        </>
    )
}

export default Home;