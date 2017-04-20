import React, { Component} from 'react'
import {
  BrowserRouter as Route
} from 'react-router-dom'

class Search extends Component {
  // _submit = (event) => {
  //   event.preventDefault()
  //   const addWord = this.refs.createWord
  //   const addInfo = this.refs.createInfo
  //   this.props.addItem(addWord.value, addInfo.value)
  //   addWord.value = ''
  //   addInfo.value = ''
  // }
  _search = (event) => {
    event.preventDefault()
    const find = this.refs.searchWord
    this.addItem(find.value)
    find.value = ''
  }
  render () {
    return <Route><div className='search'>
      <form onSubmit={this._search}>
        <div className='userSearch'>
          <h2>Search</h2>
          <div className='Word'>
            <textarea name='word-search' placeholder='WORD' ref='searchWord' />
          </div>
          <div className='userSubmitSearch'><input type='submit' value='SEARCH' /></div>
        </div>
      </form>
      <button>ADD NEW TERM</button>
    </div></Route>
  }
}

export default Search
