import React, { Component } from 'react'
import Word from './Word'

class Results extends Component {
  render () {
    const results = this.props.results.map((item, i) => {
      return <Word
        label={item}
        index={i}
        key={i} />
    })
    return <div className='results'>
      <h2>Results</h2>
      <ul className='one-list'>
        {results}
      </ul>
    </div>
  }
}

export default Results
