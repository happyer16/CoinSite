import React from 'react'
import { connect } from 'react-redux'
import { addCoin } from '../actions'

class AddCoin extends React.Component {
  render() {
    let input

    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            this.props.onSubmit(input.value)
            input.value = ''
          }}
        >
          <input
            ref={node => {
              input = node
            }}
          />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (name) => dispatch(addCoin(name))
  }
}

export default connect(undefined, mapDispatchToProps)(AddCoin)
