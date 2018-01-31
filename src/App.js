import React from 'react';
import { Header, Coin, CoinList } from './components';
import { Setting } from './containers';

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
