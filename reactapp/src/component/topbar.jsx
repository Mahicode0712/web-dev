import React from 'react'
import { Link } from 'react-router-dom'

function TopBar() {
  return (
    <div>
      <h1>Logo</h1>
      <ul>
      <link to ="/"><li>HomePage</li></link> 
      <link to ="/article"><li>Article</li></link>
      <link to ="/contact"><li>Contact</li></link>
      </ul>
    </div>
  )
}

export default TopBar