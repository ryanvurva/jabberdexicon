import React, { Component } from 'react'
import OutPut from './OutPut'
import { get } from '../api'

class Results extends Component {
  state = {
    query: null,
    entries: []
  }

  find () {
    const query = this.props.match.params.query
    if (query !== this.state.query) {
      get('/entries', query).then(entries => this.setState({ entries, query }))
    }
  }

  componentDidMount () {
    this.find()
  }

  componentDidUpdate () {
    this.find()
  }

  render () {
    return <div className='results'>
      <div className='title'>
        <h2>Results for "{this.props.match.params.query}"</h2>
      </div>
      <OutPut entries={this.state.entries} />
    </div>
  }
}

export default Results
