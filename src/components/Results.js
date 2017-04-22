import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
// import Entry from './Entry'
import { get } from '../api'

class Results extends Component {
  state = {
    query: null,
    active: []
  }

  doSearch () {
    const query = this.props.match.params.query
    if (query !== this.state.query) {
      get('/entries', query).then(entries => this.setState({ entries, query }))
    }
  }

  componentDidMount () {
    this.doSearch()
  }

  componentDidUpdate () {
    this.doSearch()
  }

  render () {
    return <div className='outputArea'>
      <span>
        <div className='title'>
          <h2>Results</h2>
        </div>
        <div className='results'>
          {/* <Entry entries={this.state.entries} /> */}
        </div>
      </span>
    </div>
  }
}

export default Results
