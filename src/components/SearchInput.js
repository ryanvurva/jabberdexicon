import React, { Component} from 'react'
import { withRouter, Link } from 'react-router-dom'

class SearchInput extends Component {
  // update = (query) => {
  //   this.setState({ input: query })
  // }
  _submit = (event) => {
    event.preventDefault()
    const query = this.refs.query.value
    const path = query.length > 0 ? `/search/${query}` : '/'
    this.refs.query.value = ''
    this.props.history.push(path)
    // this.update(query)
  }

  _focus = (e) => {
    e.target.setSelectionRange(0, e.target.value.length)
  }

  render () {
    return <div className='search'>
      <Link to='/new-entry'><button>ADD NEW TERM</button></Link>
      <div className='userSearch'>
        <h2>Search</h2>
        <div className='Word'>
          <form action='#' onChange={this._submit}>
            <input type='search' ref='query' onFocus={this._focus} />
          </form>
        </div>
      </div>
    </div>
  }
}

export default withRouter(SearchInput)
