import React,{useState} from 'react'
import { url } from '../App'
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')
  let navigate = useNavigate()

  let handleLogin = async()=>{
     try {
      let res = await axios.post(`${url}/users/login`,{email,password})
      console.log(res)
      if(res.status === 200){
        sessionStorage.setItem('token',res.data.token)
        toast.success(res.data.message)
        navigate('/dashboard')
      }
     } catch (error) {
      toast.error(error.response.data.message)
     }
  }

  return <>
     <div className='login_container'>
     <div className='login_form_container'>
        <div className='left'>
            
                <h1>Login Your Account</h1>
                <form action='POST' className='form_container'>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" name="" id="" className='input'/>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" name="" id="" className='input'/>

                <Button variant="primary" className='green_btn' onClick={()=>handleLogin()}>
                Sign In
               </Button>   

            </form>
         </div>

         <div className='right'>
         <h1>New Here ?</h1>
      <Link to="/signup">
			<button type="button" className='white_btn'>
			Sing Up
			</button>
		</Link>

</div>


            

        </div>

     </div>

     
  </>
}

export default Login






