/*import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Layout() {
    const [user, setUser] = useState()
    const [Load, setLoad] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            setUser(user)
            setLoad(false)
        })
    },[])
    useEffect(()=>{
        const path = window.location.pathname
        if(user){
            if(path === '/register' || path === '/login'){
                navigate('/')
            }else{
                if(path === '/' || path === '/contactUs'){
                    navigate('/login')
                } 
            }
        }
    },[window.location.pathname, user])
  return (
   <div></div>
  )
}*/
