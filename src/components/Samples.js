import React from 'react'
import _ from 'lodash'
import Sample from './Sample'

const Samples = ({ entries }) => (
  <div className='samples'>
    <h5>Example Terms:</h5>
    <div className='examples'>
      <Sample entries={_.sampleSize(entries, 10)} />
    </div>
  </div>
)

export default Samples
