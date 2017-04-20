import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Appendix extends Component {
  render () {
    const showWord = this.props.results.map((item, i) => {
      return <p key={item.id}>
        <Link to={`/entry/${item.slug}`}>{item.term}</Link>
      </p>
    })
    return <div className='results'>
      <h2>Appendix</h2>
      <ul className='one-list'>
        {showWord}
      </ul>
    </div>
  }
}

export default Appendix
