import React from 'react';
import { connect } from 'react-redux';

import { Coin, CoinList, Main } from './components';
import { Header, Setting, AddCoin, VisibleCoinList } from './containers';
import { addCoin } from './actions';

class App extends React.Component {
    render(){

      /* Check whether current route is login or register using regax */
      let re = /(login|register)/;
      let isAuth = re.test(this.props.location.pathname);

      const { dispatch, visibleTodos } = this.props;

      return (
          <div>
            { isAuth ?
                undefined :
                <div>
                  <Header/>
                  <AddCoin />
                  <VisibleCoinList />
                </div>
            }
            { this.props.children }
          </div>
      );
    }
}


export { App } ;
