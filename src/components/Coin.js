import React, { Component } from 'react';
import PropTypes from 'prop-types';

import io from 'socket.io-client';

class Coin extends React.Component {


  constructor(props){
    super(props);
    this.socket;
    this.state = {
      price: null
    }
    this.handleRemove=this.handleRemove.bind(this);
  }

  componentDidMount() {
    this.socket = io('http://localhost:4000'); // FIXME 서버 배포될때는 다른 코드 작성 필요
    this.socket.on('connect', () => { console.log('웹 소켓 서버에 연결되었습니다.')} );
    this.socket.on('message', (message) => { console.log(JSON.stringify(message))} );

    this.socket.on('coinPrice',(coinprice) => {
        this.setState({
            price: coinprice
        });
    });
    this.socket.emit('coinPrice', this.props.name);
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  handleRemove() {
    let id=this.props.coin._id;
    let index=this.props.index;
    this.props.onRemove(id,index);
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
        <td className={this.props.buyAvg < this.state.price ? 'positive' : 'negative'}> {Number(this.state.price).toLocaleString('en')} KRW </td>
        <td> {Number(this.props.buySum).toLocaleString('en')} KRW </td>
        <td className={this.props.buyAvg < this.state.price ? 'positive' : 'negative'}> {Number(this.state.price * this.props.coinAmount).toLocaleString('en')} KRW</td>
        <td className='collapsing'>
          <div className='ui button' onClick={this.handleRemove}>
            X
          </div>
        </td>
      </tr>
    );
  }
}

Coin.propTypes = {
  name : PropTypes.string.isRequired, // 코인명
  coinAmount : PropTypes.number.isRequired, // 보유수량
  buyAvg : PropTypes.number.isRequired, // 매수 평균가
  buySum : PropTypes.number.isRequired, // 매수 금액
  onRemove : PropTypes.func
};

Coin.defaultProps = {
  onRemove : (id,index) => {
    console.error('remove function not defined');
  }
}

export default Coin;
