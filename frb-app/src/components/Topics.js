import React from 'react'
import {Link} from 'react-router-dom'

function Topics() {
  return (
    <div>
      <h3>Topics</h3>
      <ul>
        <li><Link to='/topics/rendering'>Rendering with React</Link></li>
        <li><Link to='/topics/components'>Components</Link></li>
        <li><Link to='/topics/props-v-state'>Props vs State</Link></li>
      </ul>
    </div>
  )
}

export default Topics