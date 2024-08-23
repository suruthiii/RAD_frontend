import React,{useState} from "react";
import axios from "axios";
import './add_style.css'
import Header_user from "./Header_user";

export default function AddNonacademicstaff()
{
    const [name , setname]  = useState("");
    const [age , setage]  = useState("");
    const [gender , setgender]  = useState("");
    const [working_field , setworking_field]  = useState("");

    function senddata(e)
    {
        e.preventDefault();

        const newnonacademicstaff = {
            name,
            age,
            gender,
            working_field
        }

      axios.post("http://localhost:8070/nonacademicstaff/add_nonacademicstaff",newnonacademicstaff).then(()=>{
        alert("nonacademicstaff add")
        setname("");
        setage("");
        setgender("");
        setworking_field("");
      }).catch((err)=>{alert(err)})
    }

    
        
    return(
      <div>
         <Header_user/>
      <div className="container">
      <div className="text">
         Non Academic Staff Application Form
      </div>
      <form action="#">
         <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
               <label className="name"></label>
        <input type="text" className="name_i" placeholder="Your name" onChange={e=>{setname(e.target.value);}}/>
            </div>
            <div className="input-data">
               <div className="underline"></div>
              <label className="age"></label>
       <input type="number" placeholder="Your age" onChange={e=>{setage(e.target.value);}}/>
            </div>
         </div>
         <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
                <label className="Gender"></label>
       <input type="text" placeholder="Your Gender" onChange={e=>{setgender(e.target.value);}}/>
            </div>
            </div> 
            <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
                <label className="working_field"></label>
       <input type="text" placeholder="Your working field(s)" onChange={e=>{setworking_field(e.target.value);}}/>
            </div>
            </div> 
                  <button className="button" onClick={senddata}>Submit</button>
              
      </form>
      </div>
      </div>

    )
}