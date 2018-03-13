import React from 'react'
import { connect } from 'react-redux'
import { toggleCoin } from '../actions'
import CoinList from '../components/CoinList'

import { coinListRequest, coinRemoveRequest } from 'actions/coins';

class CoinListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(id,index) {
    this.props.coinRemoveRequest(id,index).then(() => {
    })
  }

  render(){
    return(
      <div>
        <CoinList coins={this.props.coinData} onRemove={this.handleRemove}/>
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
  return {
    coins: state.coins.coins,
    coinData: state.coins.list.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    coinRemoveRequest: (id,index) => {
      return dispatch(coinRemoveRequest(id,index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinListContainer);
