import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CoinList.scss';
import Coin from './Coin';
import { connect } from 'react-redux';

import * as actions from '../actions';

class CoinList extends React.Component {

  constructor(props){
    super(props);
    this.sum = 0;
  }

  componentDidMount() {
    // $('table').tablesort();
  }

  render() {
    const {coins} = this.props;
    return (
      <div>
        <table className="ui blue sortable celled table">
          {/* Table Header */}
          <thead>
            <tr>
              <th className="sorted descending">보유코인</th>
              <th className="sorted descending">보유수량</th>
              <th className="sorted descending">매수평균가</th>
              <th>현재금액</th>
              <th>총 매수금액</th>
              <th>총 평가금액</th>
              <th/>
            </tr>
          </thead>

          {/* Table Row ( Coin ) */}
          <tbody>
            {coins.map((coin,i) => {
              this.sum += coin.buySum;
              console.log(coin);
              return (<Coin coin = {coin}
                            name = {coin.name}
                            coinAmount = {coin.amount}
                            buyAvg = {coin.buyAvg}
                            buySum ={coin.buySum}
                            evaluationAmount={coin.evaluationAmount}
                            key = {coin._id}
                            index = {i}
                            onRemove = {this.props.onRemove}
                      />);
            })}
          </tbody>

          <tfoot>
            <tr>
              <th/>
              <th/>
              <th/>
              <th/>
              <th/>
              <th>{Number(this.sum).toLocaleString('en')} KRW </th>
            </tr>
          </tfoot>
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
  ).isRequired,
  onRemove: PropTypes.func
}

export default CoinList;
