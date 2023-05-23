import './App.css';
import React from 'react';
import Header from './components/header'
import Body from './components/Body'

function App() {

  // const [coins, setCoins] = useState([])
  // const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=5&page=1&sparkline=false&locale=en'

  // useEffect(()=>{
  //   Axios.get(url).then((response)=>{
  //     setCoins(response.data);
  //     console.log(response.data);
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // },[])

  return (
    <div className="App">
     <Header/>
     <Body />
    </div>
  );
}

export default App;
