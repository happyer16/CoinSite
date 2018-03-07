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
    coins: state.coins
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
