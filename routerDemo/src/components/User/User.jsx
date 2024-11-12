import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {id}=useParams()
  return (
    <>
    <h1 className='grid place-items-center bg-green-400 text-2xl'>Hi user:{id}</h1>
    </>
  )
}

export default User
