import React from 'react';
import styles from "../styles/home.module.css";
import GraphPopulationData from './graph-population-data';
import CryptoCurrency from './crypto-currency';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.pageTitle}>Welcome to the Home Page</h1>

      <GraphPopulationData/>
      <CryptoCurrency/>
    </div>
  )
}

export default Home;
