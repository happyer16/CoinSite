import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <table className="ui celled table">
          {/* Table Header */}
          <thead>
            <tr>
              <th>보유코인</th>
              <th>보유수량</th>
              <th>매수평균가</th>
              <th>매수금액</th>
              <th>현재금액</th>
              <th>평가금액</th>
            </tr>
          </thead>

          {/* Table Row ( Coin ) */}
          <tbody>
            {coins.map((coin,i) => {
              return (<Coin name = {coin.name}
                            coinAmount = {coin.amount}
                            buyAvg = {coin.buyAvg}
                            buySum ={coin.buySum}
                            evaluationAmount={coin.evaluationAmount}
                            key = {i}
                      />);
            })}
          </tbody>
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
