import React from 'react'
import _ from 'lodash'
import Samples from './Samples'

const Home = ({ entries }) => (
  <div className='home'>
    <span>
      <div className='titleHome'><h2>Welcome!</h2></div>
      <h4>Search for a word, or add your own term and definition to the library!</h4>
    </span>
    <Samples entries={_.sampleSize(entries, 4)} />
  </div>
)

export default Home
