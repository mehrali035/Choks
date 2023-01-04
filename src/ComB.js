import React, { useContext } from 'react'
import ComC from './ComC'
import { firstName, lastName } from './App';

const ComB = () => {
    const fname = useContext(firstName);
    const lname = useContext(lastName);
  return (
   <>
   <h1>My name is {fname} {lname}</h1>
   <ComC />
   </>
  )
}

export default ComB
