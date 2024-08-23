import React,{Fragment, useState} from "react";
import axios from "axios";
import './add_style.css'
import logo from '../images/LOGO.png'
import Header_lec from "./Header_lec";


const Lecturer = () =>
{
   return(
      <div>
         <Header_lec/>
         <div className="container">
      <div className="text">
         <h1>Welcome!!!</h1>
         <img class="img" src={logo} alt="Logo" />
         <p>Learning Management System (LMS)</p>
      </div>
      <form action="#">
         <div className="form-row"/>
            
              
      </form>
      </div>
      </div>
   
    )

}


export default Lecturer;