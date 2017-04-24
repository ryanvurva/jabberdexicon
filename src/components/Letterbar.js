import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { get } from '../api'

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

class LetterBar extends Component {
  state = {
    entries: []
  }

  componentDidMount () {
    get('/entries').then((entries) => {
      this.setState({ entries })
    })
  }

  render () {
    return <ul className='letterBar'>
      {letters.map((l) => (
        <li key={l}>
          <NavLink to={`/browse/${l}`}>{l}</NavLink>
        </li>
      ))}
      <li><NavLink to='/browse/0'>#</NavLink></li>
    </ul>
  }
}

export default LetterBar
