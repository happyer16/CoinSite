import React, { Component } from 'react';
import './CoinList.scss';
import Coin from './Coin';
import AddCoin from '../containers/AddCoin';
import { connect } from 'react-redux';

import * as actions from '../actions';

class CoinList extends React.Component {

  constructor(props){
    super(props);
    this.state={
      name : 'eth',
      coinData: [
        {name : "이더리움", coinAmount : "200", buyAvg : "300000", buyAmount : "60000000", evaluationAmount : "1000000000"},
        {name : "비트코인", coinAmount : "100", buyAvg : "1000000", buyAmount : "100000000", evaluationAmount : "1000000000"}
      ]
    }
    this.setName = this.setName.bind(this);
  }

  setName(){
    const name = 'name2';
    this.props.handleAddCoin(name);
  };
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <AddCoin onAddClick={this.setName} />
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

const mapStateToProps = (state) => {
  return {
    name :state.name
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    handleAddCoin: (name) => { dispatch(actions.addCoin(name))}
  };
};
export default connect(mapStateToProps, mapDispatchProps)(CoinList);
