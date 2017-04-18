import React, { Component } from 'react'

class Output extends Component {
  render () {
    // const items = this.props.items.map((item, i) => {
    //   return <Item
    //     label={item.text}
    //     done={item.complete}
    //     toggleComplete={this.props.toggleComplete}
    //     index={i}
    //     key={i} />
    // })
    return <div className='outputArea'>
      <h2>Word:</h2>
      <div>word</div>
      {/* <div>{items}</div> */}
      <h2>Description:</h2>
      <div>description</div>
      {/* <div>{items}</div> */}
    </div>
  }
}

export default Output
