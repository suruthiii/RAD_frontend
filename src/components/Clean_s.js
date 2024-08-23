import React,{Fragment, useState} from "react";
import axios from "axios";
import './add_style.css'
import logo from '../images/LOGO.png'
import Header_clean_s from "./Header_clean_s"




const Clean_s = () =>
{
   return(
      <div>
         <Header_clean_s/>
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


export default Clean_s;