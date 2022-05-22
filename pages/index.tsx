import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ThemeProvider, Card, Heading, Text } from 'degen'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Music Coinvise</title>
        <meta name="description" content="Listen to great music and earn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Card>
          <Heading>TBCoin</Heading>
          <Text>Where people listen to great music</Text>
        </Card>
      </ThemeProvider>
    </div>
  )
}

export default Home
