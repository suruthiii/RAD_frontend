import React,{useState} from "react";
import axios from "axios";
import './add_style.css'
import { Link } from "react-router-dom";
import Header_2 from "./Header_2";


export default function Signup()
{
    const [first_name , setfirst_name]  = useState("");
    const [last_name , setlast_name]  = useState("");
    const [role , setrole]  = useState("");
    const [Username , setUsername]  = useState("");
    const [Mobile_NO , setMobile_NO]  = useState("");
    const [Temporary_Password , setTemporary_Password]  = useState("");
    

    function senddata(e)
    {
        e.preventDefault();

        const newsignup = {
            first_name,
            last_name,
            role,
            Username,
            Mobile_NO,
            Temporary_Password
        }

      axios.post("http://localhost:8070/signup",newsignup).then(()=>{
        alert("Successful Registration")
        setfirst_name("");
        setlast_name("");
        setrole("");
        setUsername("");
        setMobile_NO("");
        setTemporary_Password("");
        window.location.href="./"
      }).catch((err)=>{alert(err)})
       
    }

    
        
    return(
      <div>
        <Header_2/>
      <div className="container">
      <div className="text">
         Registration Form
      </div>
      <form action="#">
         <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
               <label className="first name"></label>
        <input type="text" className="name_i" placeholder="first name" onChange={e=>{setfirst_name(e.target.value);}}/>
            </div>
            <div className="input-data">
               <div className="underline"></div>
              <label className="last name"></label>
              <input type="text" className="name_i" placeholder="last name" onChange={e=>{setlast_name(e.target.value);}}/> 
              </div>
            </div>
            <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
               <label className="role"></label>
        <input type="text" className="name_i" placeholder="role" onChange={e=>{setrole(e.target.value);}}/>
            </div>
            <div className="input-data">
               <div className="underline"></div>
              <label className="User name"></label>
              <input type="text" className="name_i" placeholder="User name" onChange={e=>{setUsername(e.target.value);}}/> 
              </div>
            </div>
            <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
                <label className="Mobile NO"></label>
                <input type="number" className="name_i" placeholder="Mobile NO" onChange={e=>{setMobile_NO(e.target.value);}}/> 
            </div>
            </div>
            <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
                <label className="Temporary_Password"></label>
                <input type="text" className="name_i" placeholder="Temporary_Password" onChange={e=>{setTemporary_Password(e.target.value);}}/>
            </div>
            </div> 
              <button type="submit" className="button" onClick={senddata}>Submit</button>
             
            
              
      </form>
      </div>
      </div>
   
    )
}