import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { get } from '../api'

class Term extends Component {
  state = {
    entry: null,
    active: {}
  }

  updateWord (slug) {
    this.setState({active: []})
    const url = `https://jabberdexicon.herokuapp.com/entries/${slug}?access_token=vorpal`
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      this.setState({
        active: data
      })
    })
  }

  componentDidMount () {
    const { slug } = this.props.match.params
    this.updateWord(this.props.match.params.slug)
    get(`/entries/${slug}`).then(entry => this.setState({ entry }))
  }

  _edit = () => {
    this.props.history.push(`/edit/${this.props.match.params.slug}`)
  }

  _delete = () => {
    if (window.confirm('Are you sure?')) {
      const url = `https://jabberdexicon.herokuapp.com/entries/${this.state.active.slug}?access_token=vorpal`
      window.fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      }).then(this.setState({active: {}}))
      .then(this.props.history.push('/'))
    }
  }

  render () {
    const { entry } = this.state
    if (entry) {
      return <div className='outputArea'>
        <span>
          <div className='title'>
            <h2>{entry.term}</h2>
            <div className='edit'>
              <NavLink to='/edit/:entry'><i onClick={this._edit} className='fa fa-pencil' aria-hidden='true' /></NavLink>
            </div>
          </div>
          <div className='definition' dangerouslySetInnerHTML={{__html: entry.formatted_definition}} />
        </span>
      </div>
    } else {
      return <div className='outputArea'>
        <div className='title'>
          <h2>Buffering <i className='fa fa-refresh fa-spin' aria-hidden='true' /></h2>
        </div>
      </div>
    }
  }
}

export default Term
