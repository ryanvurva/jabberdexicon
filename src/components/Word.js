import React, { Component } from 'react'

class Word extends Component {
  render () {
    return <li>
      {this.props.label}
    </li>
  }
}

export default Word
