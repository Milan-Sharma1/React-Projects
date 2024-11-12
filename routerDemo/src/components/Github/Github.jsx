import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
  const data = useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Milan-Sharma1')
    //     .then(res => res.json())
    //     .then(data => {
    //         setdata(data)
    //         console.log(data)
    //     })
    // }, [])
    
  return (
    <div className='grid place-items-center bg-gray-500 text-white'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/Milan-Sharma1')
    const data = await res.json()
    return data
}