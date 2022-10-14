import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Filter extends Component {
  

  render() {
    return (
        <input type="text" name="filter" onInput={(e)=>this.props.searcheFunc(e)} />
    )
  }
}
Filter.propTypes = {
    searcheFunc: PropTypes.func.isRequired,
}