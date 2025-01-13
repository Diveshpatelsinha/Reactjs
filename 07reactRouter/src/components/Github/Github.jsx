import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    // const[data, setData] =useState([])

    // useEffect(() => {
    //   fetch('https://api.github.com/users/Diveshpatelsinha')
    //  .then(response => response.json())
    //  .then(data=>{
    //     console.log(data);
    //     setData(data)
        
    //  })
    //   return () => {
        
    //   }
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl' >
      Github followers:{data.followers}
      <img className='' src={data.avatar_url} alt="Git picture" width= {300} />
    </div>
  )
}


export default Github

export const  loadGithubInfo = async()=>{
    const response = await fetch('https://api.github.com/users/Diveshpatelsinha')
    return response.json()
}
