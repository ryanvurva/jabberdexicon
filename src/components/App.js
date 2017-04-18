import React, { Component } from 'react'
import Input from './Input'
import Output from './Output'

class App extends Component {
  state = {
    results: [],
    words: '',
    descriptions: ''
  }
  componentDidMount () {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=ryanvtest'
    window.fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          results: data
        })
        console.log(data)
      })
  }

  addItem = (term, description) => {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=ryanvtest'
    window.fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        entry: {
          term: term,
          definition: description
        }
      })
    }).then(r => r.json())
    .then(data => {
      console.log(data)
    })
    this.setState({
      results: [...this.state.results, term]
    })
  }

  render () {
    return <div className='AppMain'>
      <h1>The Jabberdexicon</h1>
      <div className='display'>
        <Input addItem={this.addItem} results={this.state.results} words={this.state.words} description={this.state.description} />
        <Output />
      </div>
    </div>
  }
}

export default App
