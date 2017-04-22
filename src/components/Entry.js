import React from 'react'
import { Link } from 'react-router-dom'

const Entry = ({ entries }) => (
  <ul className='one-list'>
    {entries.map((entry) => (
      <li key={entry.id}>
        <Link to={`/entry/${entry.slug}`}>{entry.term}</Link>
      </li>
    ))}
  </ul>
)

export default Entry
// entrylist
