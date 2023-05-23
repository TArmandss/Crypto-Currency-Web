import React, {useState,useEffect} from 'react'
import './Body.css'
import CryptoPage from './CryptoPage'
import Axios from 'axios'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {FaBitcoin} from 'react-icons/fa';

function Body() {
    const [clicked , setClicked] = useState(false)
    const [coins, setCoins] = useState([])
    const [currency, setCurrency] = useState("eur")
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=15&page=1&sparkline=false&locale=en`
   

    useEffect(()=>{
        Axios.get(url).then((response)=>{
            setCoins(response.data);
            console.log(response.data);
          }).catch((err)=>{
            console.log(err);
          })
    },[currency])

    const cryptoPageHandler =()=>{
        setClicked(true)       
    }

  return (
    <div>
        {clicked === true ? <CryptoPage coins={coins} setCurrency={setCurrency} currency={currency}/>  
          :
          <div className="wrapper">
            <FaBitcoin className='crypto-icon'/>
            <h2>STAY UP TO DATE</h2>
            <button onClick={cryptoPageHandler}>Check out <MdOutlineKeyboardArrowRight className='arrow-icon'/></button>
          </div>
        }
    </div>
  )
}

export default Body