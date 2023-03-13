import React,{useState} from 'react'
import { url } from '../App'
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



function Signup() {
   let [firstName,setFirstName] = useState('')
   let [lastName,setLastName] = useState('')
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')
  let navigate = useNavigate()

  let handleSignup = async()=>{
     try {
      let res = await axios.post(`${url}/users/signup`,{firstName,lastName,email,password})
      console.log(res)
      if(res.status === 200){
        toast.success(res.data.message)
        navigate('/login')
      }
     } catch (error) {
      toast.error(error.response.data.message)
     }
  }

  return <>
     <div className='signup_container'>
     <div className='signup_form_container'>
        <div className='left1'>
            <h1>Welcome Back</h1>
            <Link to='/login'>
               <button type='button' className='white_btn' >Sign in</button>
            </Link>
            </div>
             <div className='right1'>
             <form action='POST' className='form_container1'>
               <h1>Create Account</h1>
                 <input type="text" onChange={(e)=>setFirstName(e.target.value)} placeholder="FirstName" name="" id="" className='input1'/>
                 <input type="text" onChange={(e)=>setLastName(e.target.value)} placeholder="LastName" name="" id="" className='input1'/>
                 <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" name="" id="" className='input1'/>
                 <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" name="" id="" className='input1'/>
                 <Button type="submit" className='green_btn' onClick={()=>handleSignup()}>Sign Up</Button>
               </form>

             </div>
         </div>

        </div>

   
     
  </>
}

export default Signup






