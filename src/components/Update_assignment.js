import React,{useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './add_style.css'
import Header_assignment from "./Header_assignment";

export default function Update_assignment()
{
    const {id} = useParams()
    const [coursename , setcoursename]  = useState();
    const [aname , setaname]  = useState();
    const [task , settask]  = useState();
    const [duedate , setduedate]  = useState();

    function senddata(e)
    {
        e.preventDefault();

        const newassignment = {
            coursename,
            aname,
            task,
            duedate
        }


      axios.put("http://localhost:8070/assignment/update_assignment/" + id,newassignment).then(()=>{
        alert("assignment update")
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
          assignment update Form
        </div>
        <form action="#">
           <div className="form-row">
              <div className="input-data">
                 <div className="underline"></div>
                 <label className="name"></label>
          <input type="text" className="name_i" placeholder="coursename" onChange={e=>{setcoursename(e.target.value);}}/>
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