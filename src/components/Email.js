import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { url } from '../App'
import { toast } from 'react-toastify';
import axios from 'axios';

function Email() {
    let token = sessionStorage.getItem('token')
    let [message,setMessage] = useState("")
    let navigate = useNavigate()
    

    let sendEmail = async()=>{
        try {
            let res = await axios.post(`${url}/users/send-email`,{message},{
              headers:{
                Authorization:`Bearer ${token}`
              }
            })
            if(res.status === 200)
            {
              toast.success(res.data.message)
              navigate('/login')
            }
          } catch (error) {
            toast.error(error.response.data.message)
            if(error.response.status === 401){
              handleLogout()
            }
          }
    }

    let handleLogout = async()=>{
        sessionStorage.clear()
        navigate('/login')
    }


  return <>
    <div className='login_container'>
     <div className='login_form_container'>
        <div className='left'>
             <h1>Email Conformation</h1>
            <form action='POST' className='form_container '>
            <input type="text" onChange={(e)=>setMessage(e.target.value)} name="" id="" className='input'/>  
                <Button variant="primary" onClick={()=>sendEmail()} >
                 Click Now Send in Mail Ticket
               </Button>   
            </form>
        </div>

        <div className='right'>
        <h1>Send Mail</h1>
        </div>
     </div>
</div>
  </>
}

export default Email