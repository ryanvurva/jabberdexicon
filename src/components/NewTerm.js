import React, { Component } from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch
// } from 'react-router-dom'

class NewTerm extends Component {
  addItem = (newTerm, newDef) => {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=vorpal'
    window.fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'entry': {
          'term': newTerm,
          'definition': newDef
        }
      })
    }).then(r => r.json())
    .then(data => {
      this.props.history.push(`/entry/${data.slug}`)
    })
  }
  _submit = (event) => {
    event.preventDefault()
    const addWord = this.refs.createWord
    const addInfo = this.refs.createInfo
    this.addItem(addWord.value, addInfo.value)
    addWord.value = ''
    addInfo.value = ''
  }
  render () {
    return <div className='newTerm'>
      <form onSubmit={this._submit}>
        <div className='userInputs'>
          <h2>Create</h2>
          <div className='Word'>
            <textarea name='word-create' placeholder='WORD' ref='createWord' />
          </div>
          <div className='Description'>
            <textarea name='description-create' placeholder='DESCRIPTION' ref='createInfo' cols='50' rows='10' />
          </div>
          <div className='userSubmitCreate'><input type='submit' value='CREATE' /></div>
        </div></form>
    </div>
  }
}

export default NewTerm
