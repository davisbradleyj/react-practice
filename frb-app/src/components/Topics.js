import React from 'react'
import { Link, Route } from 'react-router-dom'

function Topic(props) {
  return <h3>{props.match.params.topicId}</h3>
}

function Topics({ match }) {
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
      {/* nested routes should use Path, nested Links should use url */}
      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route exact path={match.path} render={() => {
        return <h3>Please select a topic</h3>
      }} />

    </div>
  )
}

export default Topics