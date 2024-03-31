import React, { useEffect, useState } from 'react'
import { list } from '../common/sidebar-list';
import { ICurrency, ICurrencyData } from '../types/crypto-data.interface';
import styles from "../styles/home.module.css";

const CryptoCurrency = () => {

    const [cryptoData, setCryptoData] = useState<any>({});


    useEffect(()=>{

        fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`).then((res)=>res.json())
        .then((res)=>{
            let data:ICurrencyData = res?.bpi;
            if(Object.values(data)?.length > 0){

                setCryptoData(data);

            }
        })

    },[]);


  return (
    <>
        <h1 className={styles.section_title}>Crypto Currency</h1>
        <div className={styles.crypto_container}>
        {
            Object.values(cryptoData)?.length > 0 &&
            Object.values(cryptoData)?.map((item:any, index:number)=>{
                return <div key={index} className={styles.crypto_container_card}>
                    
                    <h1>{item?.code}</h1>
                    <h3>{item?.rate}</h3>
                    <p>{item?.description}</p>

                </div>
            })
        }
        </div>
    </>
  )
}

export default CryptoCurrency
