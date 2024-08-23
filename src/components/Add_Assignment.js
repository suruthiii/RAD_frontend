import React,{Fragment, useState} from "react";
import axios from "axios";
import './add_style.css'
import Header_assignment from "./Header_assignment";

const Addassignment = () =>
{
    const [coursename , setcoursename]  = useState("");
    const [aname , setaname]  = useState("");
    const [task , settask]  = useState("");
    const [duedate , setduedate]  = useState("");

    function senddata(e)
    {
        e.preventDefault();

        const newassignment = {
            coursename,
            aname,
            task,
            duedate
        }

      axios.post("http://localhost:8070/assignment/add_assignment",newassignment).then(()=>{
        alert("assignment add")
        setcoursename("");
        setaname("");
        settask("");
        setduedate("");
      }).catch((err)=>{alert(err)})
    }

    
        
    return(
      <div>
         <Header_assignment/>
      <div className="container">
      <div className="text">
         assignment Adding Form
      </div>
      <form action="#">
         <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
               <label className="assignment name"></label>
        <input type="text" className="name_i" placeholder="Course name" onChange={e=>{setcoursename(e.target.value);}}/>
            </div>
            <div className="input-data">
               <div className="underline"></div>
              <label className="aname"></label>
       <input type="text" placeholder="Assignment name" onChange={e=>{setaname(e.target.value);}}/>
            </div>
         </div>
         <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
                <label className="Gender"></label>    
       <input type="text" placeholder="task" onChange={e=>{settask(e.target.value);}}/>       
            </div>
            </div> 
            <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
                <label className="assignment"></label>
       <input type="date" placeholder="duedate" onChange={e=>{setduedate(e.target.value);}}/>
            </div>
            </div> 
                  <button className="button" onClick={senddata}>Submit</button>
              
      </form>
      </div>
      </div>
   
    )
}

export default Addassignment;