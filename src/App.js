import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard";
import BookDate from "./components/BookDate";
import Seat from "./components/Seat";
import Email from "./components/Email";

export const url = 'https://bookmyshow-87hp.onrender.com'

function App() {
  return <>
   <BrowserRouter>
     <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/bookdate" element={<BookDate/>}/>
        <Route path="/seat" element={<Seat/>}/>
        <Route path="/email" element={<Email/>}/>
        <Route path="*" element={<Navigate to="/login"/>}/>
     </Routes>
   </BrowserRouter>
  </>
}

export default App;
