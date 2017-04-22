import React, { Component} from 'react'
import { withRouter, Link } from 'react-router-dom'
import _ from 'lodash'
import Samples from './Samples'

class Search extends Component {
  _search = (event) => {
    event.preventDefault()
    const query = this.refs.query.value
    const path = query.length > 0 ? `/results/${query}` : '/'
    this.refs.query.value = ''
    this.props.history.push(path)
  }

  render () {
    return <div className='search'>
      <form action='#' onSubmit={this._search}>
        <div className='userSearch'>
          <h2>Search</h2>
          <div className='Word'>
            <input type='search' ref='query' />
          </div>
        </div>
      </form>
      <Link to='/new-entry'><button>ADD NEW TERM</button></Link>
      <div>
        <Samples entries={this.props.entries} />
      </div>
    </div>
  }
}

export default withRouter(Search)
