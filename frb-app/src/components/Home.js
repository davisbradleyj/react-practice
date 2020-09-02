import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Welcome</h2>
      <p>Do not expect greatness from this page - For the next steps, please see <Link to='/about'>About</Link></p>
      <p>Styling to follow, eventually</p>
    </div>
  )
}

export default Home