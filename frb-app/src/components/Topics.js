import React from 'react'
import { Link, Route } from 'react-router-dom'

function Topic(props) {
  return <h3>{props.match.params.topicId}</h3>
}

function Topics({match}) {
  console.log('match.url', match.url)
  return (
    <div>
      <h3>Topics</h3>
      <ul>
        <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
        <li><Link to={`${match.url}/components`}>Components</Link></li>
        <li><Link to={`${match.url}/props-v-state`}>Props vs State</Link></li>
      </ul>

      <hr />

      <Route path={`${match.path}/:topicId`} component={Topic} />

    </div>
  )
}

export default Topics