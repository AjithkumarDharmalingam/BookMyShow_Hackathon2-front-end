import React,{useState, useEffect} from 'react'
import { url } from '../App'
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Card from 'react-bootstrap/Card';


function Dashboard() {
  let token = sessionStorage.getItem('token')
  let [cards,setCards] = useState([])
 
  let navigate = useNavigate()

  let getData = async()=>{
    try {
      let res = await axios.get(`${url}/dashboard`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      if(res.status === 200)
      {
        setCards(res.data.admin)
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



  useEffect(()=>{
     if(token)
        getData()
      else
        handleLogout()  
  },[])

  return <div className='container-fluid'>
    <Navbar/>
    <br/>
    <div className='card-wrapper'>
    {
      cards.map((e,i)=>{
        return <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlSLXAemdazHZk-qFtVUz-QUHwWd62EGvbQ&usqp=CAU" />
        <Card.Body>
          <Card.Title>{e._id}</Card.Title>
          <Card.Text>
           Details:<br/>
           Movie:Thunivu<br/>
           Genre:Action<br/>
           Director:H.Vinoth
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate('/bookdate')}>Book Now</Button>
        </Card.Body>
      </Card>
      })
    }
    </div>
 </div>
}

export default Dashboard