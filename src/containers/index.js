import React from 'react';

class App extends React.Component {
    render(){
      return (
            <CoinList/>
      );
    }
}

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
        <h1> 투자내역 </h1>
        <table>
          <tr>
            <th>보유코인</th>
            <th>보유수량</th>
            <th>매수평균가</th>
            <th>매수금액</th>
            <th>평가금액</th>
          </tr>
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

// Coin.propTypes = {
//   name : PropTypes.string.isRequired, // 코인명
//   coinAmount : PropTypes.number.isRequired // 보유수량
// /**  buyAvg : PropTypes.number.isRequired, // 매수 평균가
//   buyAmount : PropTypes.number.isRequired, // 매수 금액
//   evaluationAmount : PropTypes.number.isRequired // 평가 금액
//   **/
// };

export { App };
