import { connect } from 'react-redux'
import { toggleCoin } from '../actions'
import CoinList from '../components/CoinList'

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

const mapStateToProps = state => {
  console.log(state);

  return {
    coins: state.coins
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onCoinClick: id => {
    //   dispatch(toggleCoin(id))
    // }
  }
}

const VisibleCoinList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinList)

export default VisibleCoinList
