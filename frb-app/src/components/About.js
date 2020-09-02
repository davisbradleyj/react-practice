import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This app is a sandbox of sorts to test a variety of ideas/concepts for exploring React</p> 
      <p>For more exploration of what was built, feel free to check out <Link to='/Topics'>Topics</Link></p> 
    </div>
  )
}

export default About