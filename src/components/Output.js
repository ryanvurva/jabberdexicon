import React, { Component } from 'react'
const token = 'vorpal'

class Test extends Component {
  state = {}

  updateWord () {
    const slug = this.props.match.params.slug
    if (slug !== this.state.slug) {
      window.fetch(`https://jabberdexicon.herokuapp.com/entries/${slug}?access_token=${token}`)
      .then(r => r.json())
      .then(data => {
        this.setState({
          ...data
        })
      })
    }
  }

  componentDidMount () {
    this.updateWord()
  }

  componentDidUpdate () {
    this.updateWord()
  }

  render () {
    return <div className='outputArea'>
      <span>
        <div className='title'>
          <h2>{this.state.term}</h2>
          <div className='edit'>
            <i className='fa fa-pencil' aria-hidden='true' />
            <i className='fa fa-trash' aria-hidden='true' />
          </div>
        </div>
        <p>{this.state.definition}</p>
      </span>
    </div>
  }
}

export default Test
