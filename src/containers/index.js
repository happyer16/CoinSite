import React from 'react';
import CoinList from './CoinList';
import Coin from './Coin';

class App extends React.Component {
    render(){
      return (
            <CoinList/>
      );
    }
}

export { App,CoinList,Coin };
