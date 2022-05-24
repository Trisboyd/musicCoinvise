// extend window interface for ethereum options
declare global {
  interface Window {
    ethereum: any;
  }
}

// ____________________________________IMPORTS
import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ThemeProvider, Button as GenButton } from 'degen';
import Header from '../components/Header/header';
import Main from '../components/Main/main';
import { ethers } from 'ethers';

const Home: NextPage = () => {

  // _____________________________METAMASK CONNECT

  // wallet state
  const [wallet, setWallet] = useState<
    { address?: string, balance?: string } | null
  >(null);

  // connect wallet to app
  const connectMetamask = () => {
    if (window.ethereum) {
      window.ethereum.request!({ method: 'eth_requestAccounts' })
        .then((res: any) => changeWallet(res[0]))
    }
    else {
      alert('Metamask necessary for this operation. Please install Metamask extension')
    }
  };

  const getBalance = (account: string) => {
    window.ethereum.request({
      method: 'eth_getBalance',
      params: [account, 'latest']
    })
      .then((amount: any) => {
        setWallet({
          balance: ethers.utils.formatEther(amount),
        })
      })
  }

  const changeWallet = (account: string) => {
    setWallet({
      address: account,
    })
    getBalance(account);
  }

  // test wallet
  // useEffect(() => {
  //   console.log(wallet);
  // }, [wallet])


  return (
    <div className={styles.container}>
      <Head>
        <title>Music Coinvise</title>
        <meta name="description" content="Listen to great music and earn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider defaultMode='dark'>
        <Header />
        <Main />
        <GenButton
          onClick={connectMetamask}>
          Connect Wallet
        </GenButton>
      </ThemeProvider>
    </div>
  )
}

export default Home
