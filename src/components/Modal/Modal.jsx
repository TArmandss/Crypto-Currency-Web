import React from 'react'
import './Modal.css'
import {AiOutlineClose} from 'react-icons/ai';

function Modal(props) {

  const closeModalHandler=()=>{
    props.setTriggerModal(false)
  }

  const crypto = props.cryptoType;

  return (
    <div>
        <div className= 'backdrop'></div>
          <div className="box-module">
            <div className="header-section">
              <div className="crypto-name">
              <h1>{crypto.name}</h1>
              </div>
              <div className="crypto-info">
                <div className="crypto-heading">
              {crypto.image ? <img src={crypto.image.small} alt='' /> : null}
              {crypto.symbol ? <p>{crypto.symbol.toUpperCase()} / {props.currency.toUpperCase()}</p> : null}
                </div>
              <span className='rank-btn'>Rank # {crypto.market_cap_rank}</span>
              <AiOutlineClose className="close-btn" onClick={closeModalHandler}/>
              <div className="crypto-current-price">
                {crypto.market_data?.current_price ? <h1>{props.currencyLogo} {crypto.market_data.current_price.usd.toLocaleString()}</h1> : null}

                </div>

              </div>
            </div>
            <div className="middle-section-stats">
            <table>
                <thead>
                  <th>1h</th>
                  <th>24h</th>
                  <th>7d</th>
                  <th>14d</th>
                  <th>30d</th>
                  <th>1y</th>
                </thead>
              <tbody>
                <tr>
                  <td>{crypto.market_data.price_change_percentage_1h_in_currency[props.currency]}</td>
                  <td>{crypto.market_data.price_change_percentage_24h_in_currency[props.currency]}</td>
                  <td>{crypto.market_data.price_change_percentage_7d_in_currency[props.currency]}</td>
                  <td>{crypto.market_data.price_change_percentage_14d_in_currency[props.currency]}</td>
                  <td>{crypto.market_data.price_change_percentage_30d_in_currency[props.currency]}</td>
                  <td>{crypto.market_data.price_change_percentage_1y_in_currency[props.currency]}</td>
                </tr>
              </tbody>
              </table>
            </div>
            <div className="low-high-section">
              <div className="left">
                <div className="row">
                <h4>24 Hour Low</h4>                     
                <h1>{crypto.market_data?.low_24h ? <p>{props.currencyLogo}{crypto.market_data.low_24h[props.currency].toLocaleString()}</p> : <p>-</p>}</h1>
                </div>
                <div className="row">
                <h4>24 Hour High</h4>                     
                <h1>{crypto.market_data?.high_24 ? <p>{crypto.market_data.low_24[props.currency].toLocaleString()}</p>: <p>-</p>}</h1>
                </div>
              </div>
              <div className='right'>
                <div className='row'>
                  <h4>Market Cap</h4>
                    {crypto.market_data?.market_cap ? <p>{props.currencyLogo}{crypto.market_data.market_cap[props.currency].toLocaleString()}</p> : null}
                  </div>
               <div className='row'>
                  <h4>Circulating Supply</h4>
                      {crypto.market_data ? <p>{crypto.market_data.circulating_supply}</p> : null}
                </div>
              </div>
            </div>
            <div className="about-section">
              <h4>{crypto.description.en}</h4>
            </div>
          </div>
    </div>
  )
}

export default Modal