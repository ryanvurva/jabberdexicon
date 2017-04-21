import React, { Component } from 'react'

class NoMatch404 extends Component {
  render () {
    return <div className='outputArea'>
      <span>
        <div className='title'>
          <h2>Whoops!</h2>
        </div>
        <p>Looks like we couldn't find what you were looking for...</p>
      </span>
    </div>
  }
}

export default NoMatch404
