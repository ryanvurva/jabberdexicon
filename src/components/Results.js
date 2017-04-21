import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
const token = 'vorpal'

class Results extends Component {
  state = {
    active: []
  }

  componentDidMount () {
    const url = `https://jabberdexicon.herokuapp.com/entries?access_token=${token}`
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      this.setState({
        active: data
      })
    })
  }

  render () {
    const filtered = this.state.active.filter(item => {
      if (this.props.match.params.word.length !== 0) {
        return item.term.toLowerCase().includes(this.props.match.params.word.toLowerCase())
      }
    })
    const words = filtered.map(word => {
      return <li key={word.id}>
        <NavLink to={`/entry/${word.slug}`}>{word.term}</NavLink>
      </li>
    })

    return <div className='outputArea'>
      <span>
        <div className='title'>
          <h2>Results</h2>
        </div>
        <div className='results'>
          <ul className='one-list'>
            {words}
          </ul>
        </div>
      </span>
    </div>
  }
}

export default Results
