import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Header, Coin, CoinList } from './components';
import { Setting,AddCoin, VisibleCoinList } from './containers';
import { addCoin } from './actions';

class App extends React.Component {
    render(){
      const { dispatch, visibleTodos } = this.props;

      return (
          <div>
            <Header/>
            <AddCoin />
            <VisibleCoinList coins = {
              [
                {
                  id: 100,
                  name : 'eth2'
                },
                {
                  id : 101,
                  name : 'eth3'
                }
              ]
            }/>
          </div>
      );
    }
}


export { App } ;
