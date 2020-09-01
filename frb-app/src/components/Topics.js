import React from 'react'
import { Link, Route } from 'react-router-dom'

function Topic({ match }) {
  return <h3>{match.params.topicId}</h3>
}

function Topics() {
  return (
    <div>
      <h3>Topics</h3>
      <ul>
        <li><Link to='/topics/rendering'>Rendering with React</Link></li>
        <li><Link to='/topics/components'>Components</Link></li>
        <li><Link to='/topics/props-v-state'>Props vs State</Link></li>
      </ul>

      <hr />

      <Route path='/topics/:topicId' component={Topic} />

    </div>
  )
}

export default Topics