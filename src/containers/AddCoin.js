import React, { findDOMNode, Component, PropTypes} from 'react';

class AddCoin extends Component{
  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={e => this.handleClick(e)}>
          Add
        </button>
      </div>
    );
  }

  handleClick(e) {
    console.log('hi');
    this.props.onAddClick('hi');
  }
}

AddCoin.propTypes = {
  onAddClick : PropTypes.func.isRequired
};

export default AddCoin;
