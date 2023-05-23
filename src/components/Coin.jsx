import React,{useState,useEffect} from 'react'
import './Coin.css'
import Modal from "../components/Modal/Modal"
import Axios from 'axios'

function Coin({coinType,price,last24h,marketCap,currency,image,currencyLogo}) {

  const [triggerModal, setTriggerModal] = useState()
  const [cryptoType, setcryptoTypee] = useState({})
  
  
  const crypto_url = `https://api.coingecko.com/api/v3/coins/${coinType}`
  const cryptoHandler =()=>{
    setTriggerModal(true)
  }

  useEffect(()=>{
    Axios.get(crypto_url).then((resposne)=>{
      setcryptoTypee(resposne.data)
      console.log(resposne.data)
    }).catch((err) =>{
      console.log(err)
    })
  },[triggerModal])
  console.log(triggerModal)

  return (
    <div>
        {triggerModal && <Modal currencyLogo={currencyLogo} cryptoType={cryptoType} currency={currency} setTriggerModal={setTriggerModal} triggerModal={triggerModal}/>}

        <div className="coin-wrapper" onClick={cryptoHandler}>
          <div className="crypto-currency">
            <div className="crypto-image">
            <img src={image}/>
            </div>
            <h2 className='coin'>{coinType}</h2>
          </div>
            <h2>{currencyLogo} {price}</h2>
            <h2>{last24h}</h2>
            <h2>{currencyLogo} {marketCap}</h2>
        </div>
    </div>
  )
}

export default Coin