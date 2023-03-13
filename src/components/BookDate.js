import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function BookDate() {
    let navigate = useNavigate()
    
  return <>
   <div className='login_container'>
     <div className='login_form_container'>
        <div className='left'>
            
            <h1>Enter Booking Date</h1>
            <form action='POST' className='form_container '>
                <input type="date" name="" id="" className='input'/>        
                <select defaultValue={"0"} className='input'>
                  <option name="text" value="0" disabled>Show Timings</option>
                  <option name="text" value="7:00AM">7:00AM</option>
                  <option name="text" value="10:30AM">10:30AM</option>
                  <option name="text" value="1:00PM">1:00PM</option>
                  <option name="text" value="6:00PM">6:00PM</option>
                </select>
                <input type="text" placeholder='No of Seats' name="" id="" className='input'/>  
                <Button variant="primary" onClick={()=>navigate('/seat')} >
                 Process
               </Button>   
            </form>
        </div>

        <div className='right'>
        <h1>Welcome Back</h1>
        </div>
     </div>
</div>
</>
}

export default BookDate