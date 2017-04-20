import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Test extends Component {
  letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  render () {
    const searchLetters = this.letters.map((letter, i) => {
      return <li key={i}>
        <NavLink to={`/browse/${letter}`} className='letterLinks'>
          {letter.toUpperCase()}
        </NavLink>
      </li>
    })
    return <ul className='letterBar'>
      {searchLetters}
      <li>
        <NavLink to={`/browse/numbers`} className='letterLinks'>
        #
      </NavLink>
      </li>
    </ul>
  }
}

export default Test
