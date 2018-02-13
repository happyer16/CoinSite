import React, { Component, PropTypes } from 'react';
import './CoinList.scss';
import Coin from './Coin';
import { connect } from 'react-redux';

import * as actions from '../actions';

class CoinList extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const {coins} = this.props;
    return (
      <div>
        <table className="CoinList">
          {/* Table Header */}
          <tr>
            <th>보유코인</th>
                  <th>보유수량</th>
                  <th>매수평균가</th>
                  <th>매수금액</th>
                  <th>평가금액</th>

          </tr>

          {/* Table Row ( Coin ) */}
        {coins.map((coin,i) => {
          return (<Coin name = {coin.name}
                        coinAmount = {coin.coinAmount}
                        buyAvg = {coin.buyAvg}
                        buyAmount ={coin.buyAmount}
                        evaluationAmount={coin.evaluationAmount}
                        key = {i}
                  />);
        })}
        </table>
      </div>
    );
  }
}

CoinList.propTypes = {
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default CoinList;