import React, { Component } from 'react';
import './CoinList.scss';
import Coin from './Coin';

class CoinList extends React.Component {

  constructor(props){
    super(props);
    this.state={
      coinData: [
        {name : "이더리움", coinAmount : "200", buyAvg : "300000", buyAmount : "60000000", evaluationAmount : "1000000000"},
        {name : "비트코인", coinAmount : "100", buyAvg : "1000000", buyAmount : "100000000", evaluationAmount : "1000000000"}
      ]
    }
  }
  render() {
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
        {this.state.coinData.map((coin,i) => {
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

export default CoinList;
