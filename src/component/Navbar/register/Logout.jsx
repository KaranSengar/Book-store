import React from 'react'
import { useAuth } from '../../../context/Authprovider'
import toast from 'react-hot-toast'

const Logout = () => {
    const [useauth,setauth]= useAuth()
    const handle = ()=>{
        try{
      setauth(
        {
            ...useauth,
           user:null
        })
        localStorage.removeItem("Users")
        toast.success("logout successfully")
        
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        }catch(err){
         toast.error("Error",err.msg)
         setTimeout(() => {
            
         }, 2000);
        }
    }
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handle}>Logout</button>
    </div>
  )
}

export default Logout