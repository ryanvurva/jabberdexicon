import React, { Component} from 'react'
import { withRouter, Link } from 'react-router-dom'

class Search extends Component {
  state={
    input: null
  }
  update = (query) => {
    this.setState({ input: query })
  }
  _search = (event) => {
    event.preventDefault()
    const query = this.refs.query.value
    const path = query.length > 0 ? `/results/${query}` : '/'
    this.props.history.push(path)
    this.update(query)
  }

  searchWord = (searchTerm) => {
    const url = `https://jabberdexicon.herokuapp.com/entries?access_token=${token}`
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      const searchFilter = data.filter(item => item.term.includes(searchTerm))
      console.log(searchFilter)
    })
  }

  _submit = e => {
    e.preventDefault()
    this.searchWord(this.refs.searchText.value)
  }

  _focus = (e) => {
    e.target.setSelectionRange(0, e.target.value.length)
  }

  // showSearchText = () => <p>Searching for {this.state.input}</p>
  render () {
    return <div className='search'>
      <form onChange={this._search}>
        <div className='userSearch'>
          <h2>Search</h2>
          <div className='Word'>
            <textarea name='word-search' onFocus={this._search} placeholder='SEARCH' ref='query' />
          </div>
          <div className='userSubmitSearch'><input type='submit' onFocus={this._focus} value='SEARCH' /></div>
        </div>
      </form>
      {/* <Route path='/results/' render={this.showSearchText} /> */}
      <Link to='/new-entry'><button>ADD NEW TERM</button></Link>
    </div>
  }
}

export default withRouter(Search)
