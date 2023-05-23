import React, { useState, useRef, useEffect } from 'react'
import './CryptoPage.css'
import Coin from './Coin'
import Carousel from 'react-elastic-carousel'

function CryptoPage({coins,setCurrency,currency}) {

    const CryptoCount = useRef(null);
  
    useEffect(() => {
      if (CryptoCount.current) {
        const itemCount = CryptoCount.current.children.length;
        console.log('Number of items:', itemCount);
      }
    }, []);
    
    const [currencyLogo , setCurrencyLogo] = useState("€")
    const handleSelectChange = (event) => {
        
        setCurrency(event.target.value);
        if (event.target.value === "eur") {
            setCurrencyLogo("€");
          } else if (event.target.value === "usd") {
            setCurrencyLogo("$");
          } else if (event.target.value === "gbp") {
            setCurrencyLogo("£");
          }
      };

      
  return (
    <div>
        <div className='cryptoPage'>
            <div className="currency-drop-down">

            <label htmlFor="">Select the currency</label>
      <select name="currency" id="languages" value={currency} onChange={handleSelectChange}>
        <option value="eur">EUR</option>
        <option value="usd">USD</option>  
        <option value="gbp">GBP</option>  
       </select>
            </div>

            <div className="crypto-box">
            <div className="list-bar">
                <h1>Coins</h1>
                <h1>Price</h1>
                <h1>Last 24h</h1>
                <h1>Market Cap</h1>
            </div>
            <div className="crypto-list" ref={CryptoCount}>
            {coins.map((coin)=>{
                    return (
                        <Coin 
                        key = {coin.id}
                        currency={currency} 
                        currencyLogo={currencyLogo} 
                        image={coin.image }
                        coinType={coin.id} 
                        price={coin.current_price} 
                        last24h={coin.price_change_24h} 
                        marketCap={coin.market_cap}>
                        </Coin>
                    )
            })}
            </div>
            </div>
        </div>
    </div>
  )
}


export default CryptoPage;
