import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Coin extends React.Component {

  render() {
    var plusStyle = {
        color: "#E06C61"
    };

    var minusStyle = {
        color: "#56B6C2"
    };

    return (
      <tr>
        <td> {this.props.name} </td>
        <td> {this.props.coinAmount} </td>
        <td> {Number(this.props.buyAvg).toLocaleString('en')} KRW </td>
        <td> {Number(this.props.buyAmount).toLocaleString('en')} KRW </td>
        <td style={this.props.coinAmount>=100 ? plusStyle : minusStyle}> {Number(this.props.evaluationAmount).toLocaleString('en')} KRW</td>
        {/** TODO 업비트 금액 따오는거 성공하면 실시간 수익율 계산 td 추가**/}
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
