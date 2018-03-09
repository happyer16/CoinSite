import React from 'react'
import { connect } from 'react-redux'
import { toggleCoin } from '../actions'
import CoinList from '../components/CoinList'

import { fetchCoins } from 'actions/coins';

class CoinListContainer extends React.Component {

  componentDidMount(){
    this.props.fetchCoins();
  }

  render(){
    var mockData = [
  		{"id":14, "name":"XMR", "coinAmount":100, "buyAvg":100000, "buySum":10000000, "evaluationAmount":1000000000},
  		{"id":24, "name":"LSK", "coinAmount":1000, "buyAvg":100000, "buySum":100000000, "evaluationAmount":5000000000},
  		{"id":34, "name":"WAVES", "coinAmount":2, "buyAvg":5000, "buySum":10000, "evaluationAmount":10000000}
  	]

    return(
      <div>
        <CoinList coins={this.props.coins}/>
      </div>
    );
  }
}

const getVisibleCoins = (coins, filter) => {
  switch (filter) {
    case 'SHOW_PLUS':
      return coins.filter(c => c.plus)
    case 'SHOW_MINUS':
      return coins.filter(c => !c.plus)
    case 'SHOW_ALL':
    default:
      return coins
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
    coins: state.coins.coins
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCoins: () =>{
      return dispatch(fetchCoins());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinListContainer);
