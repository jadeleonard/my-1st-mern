import React from 'react'
import { useState,useEffect } from 'react'
const Hero = () => {



    const [data,setData] = useState([]);
    useEffect(() => {
        const Data = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/users',{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json"
                    }
                });
                if(!response.ok){
                    throw new Error('error')
                }else{
                    const data  = response.json()
                    setData(data)
                }
            } catch (error) {
                console.log("error",error)
            }
        }
    })
  return (
    <div>
      
    </div>
  )
}

export default Hero
