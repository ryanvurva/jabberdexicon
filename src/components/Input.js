import React, { Component} from 'react'
import Results from './Results'

class Input extends Component {
  _submit = (event) => {
    event.preventDefault()
    const addWord = this.refs.createWord
    const addInfo = this.refs.createInfo
    this.props.addItem(addWord.value, addInfo.value)
    addWord.value = ''
    addInfo.value = ''
  }
  _search = (event) => {
    event.preventDefault()
    const find = this.refs.searchWord
    this.addItem(find.value)
    find.value = ''
  }
  render () {
    return <div className='userArea'>
      <form onSubmit={this._submit}>
        <div className='userInputs'>
          <h2>Create</h2>
          <div className='Word'>
            <textarea name='word-create' placeholder='WORD' ref='createWord' />
          </div>
          <div className='Description'>
            <textarea name='description-create' placeholder='DESCRIPTION' ref='createInfo' />
          </div>
          <div className='userSubmitCreate'><input type='submit' value='SUBMIT' /></div>
        </div></form>
      <form onSubmit={this._search}>
        <div className='userSearch'>
          <h2>Search</h2>
          <div className='Word'>
            <textarea name='word-search' placeholder='WORD' ref='searchWord' />
          </div>
          <div className='userSubmitSearch'><input type='submit' value='SEARCH' /></div>
        </div>
      </form>
      <Results onSubmit={this._submit} results={this.props.results} />
    </div>
  }
}

export default Input
