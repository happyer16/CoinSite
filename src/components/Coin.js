import React, { Component } from 'react';
import PropTypes from 'prop-types';

import io from 'socket.io-client';

class Coin extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      price: null
    }
  }

  componentDidMount() {
    // const socket = io('http://localhost:4000');
    // socket.on('connect', () => { console.log('웹 소켓 서버에 연결되었습니다.')} );
    // socket.on('message', (message) => { console.log(JSON.stringify(message))} );
    // socket.on('coinPrice',(coinprice) => {
    //   this.setState({
    //       price: coinprice
    //   });
    // });
    // socket.emit('coinPrice', this.props.name);
  }

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
        <td> {Number(this.props.buySum).toLocaleString('en')} KRW </td>
        <td> {Number(this.state.price).toLocaleString('en')} KRW </td>
        <td style={this.props.coinAmount>=100 ? plusStyle : minusStyle}> {Number(this.state.price * this.props.coinAmount).toLocaleString('en')} KRW</td>
      </tr>
    );
  }
}

Coin.propTypes = {
  name : PropTypes.string.isRequired, // 코인명
  coinAmount : PropTypes.number.isRequired // 보유수량
/**  buyAvg : PropTypes.number.isRequired, // 매수 평균가
  buySum : PropTypes.number.isRequired, // 매수 금액
  evaluationAmount : PropTypes.number.isRequired // 평가 금액
  **/
};

export default Coin;
