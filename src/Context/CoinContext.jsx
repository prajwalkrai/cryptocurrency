import { createContext, useEffect, useState } from "react";


export const CoinContext=createContext();

const CoinContextProvider=(props)=>{
    const [allCoin,setAllCoin]=useState([]);
    const[currency,setcurrency]=useState({
        name:"usd",
        symbol:"$"
    })

    const fetchAllCoin=async()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': 'CG-U8Gji5xK2p4vtd2s78HnCgVY '
            }
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllCoin(response))
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchAllCoin();
    },[currency]) 

    const contextValue={
         allCoin,currency,setcurrency
    }
    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
            </CoinContext.Provider>
    )
}

export default CoinContextProvider;