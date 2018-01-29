import React, { Component, PropTypes } from 'react';

class Coin extends React.Component {
  render() {
    return (
      <tr>
        <td> {this.props.name} </td>
        <td> {this.props.coinAmount} </td>
        <td> {Number(this.props.buyAvg).toLocaleString('en')} KRW </td>
        <td> {Number(this.props.buyAmount).toLocaleString('en')} KRW </td>
        <td> {Number(this.props.evaluationAmount).toLocaleString('en')} KRW</td>
      </tr>
    );
  }
}

Coin.propTypes = {
  name : PropTypes.string.isRequired, // 코인명
  coinAmount : PropTypes.number.isRequired // 보유수량
/**  buyAvg : PropTypes.number.isRequired, // 매수 평균가
  buyAmount : PropTypes.number.isRequired, // 매수 금액
  evaluationAmount : PropTypes.number.isRequired // 평가 금액
  **/
};

export default Coin;
