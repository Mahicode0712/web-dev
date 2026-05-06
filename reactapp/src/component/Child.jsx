import React from 'react'
import {useContext} from 'react'
import { UserContext } from '../UserContext'

function Child() {
    const name=useContext(UserContext)
  return (
    <div>
      <h1>Child Component</h1>
      <h2>{name}</h2>
    </div>
  )
}

export default Child