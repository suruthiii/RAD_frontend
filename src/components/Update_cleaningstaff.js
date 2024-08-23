import React,{useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './add_style.css'
import Header_user from "./Header_user";

export default function Update_cleaningstaff()
{
    const {id} = useParams()
    const [name , setname]  = useState();
    const [age , setage]  = useState();
    const [gender , setgender]  = useState();
    const [working_hours , setworking_hours]  = useState();

    function senddata(e)
    {
        e.preventDefault();

        const newcleaningstaff = {
            name,
            age,
            gender,
            working_hours
        }

      axios.put("http://localhost:8070/cleaningstaff/update_cleaningstaff/" + id,newcleaningstaff).then(()=>{
        alert("cleaningstaff update")
        setname("");
        setage("");
        setgender("");
        setworking_hours("");
      }).catch((err)=>{alert(err)})
    }

    return(
      <div>
         <Header_user/>
      <div className="container">
      <div className="text">
         Update Cleaning Staff
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
              <label className="working_hours"></label>
       <input type="number" placeholder="Your working hours(per day)" onChange={e=>{setworking_hours(e.target.value);}}/>
            </div> 
            </div>
                  <button className="button" onClick={senddata}>Submit</button>
              
      </form>
      </div>
      </div>
    )

}