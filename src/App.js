import React from 'react';
import { Header } from './components';
import { CoinList, Coin, Setting } from './containers';

class App extends React.Component {
    render(){
      return (
          <div>
            <Header/>
            <Setting/>
            <CoinList/>
          </div>
      );
    }
}

export { App };
