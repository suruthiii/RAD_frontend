import React,{Fragment, useState} from "react";
import axios from "axios";
import './add_style.css'
import Header_issue from "./Header_issue";

const Addissue = () =>
{
    const [name , setname]  = useState("");
    const [subject , setsubject]  = useState("");
    const [problem , setproblem]  = useState("");
    const [date , setdate]  = useState("");

    function senddata(e)
    {
        e.preventDefault();

        const newissue = {
            name,
            subject,
            problem,
            date
        }

      axios.post("http://localhost:8070/issue/add_issue",newissue).then(()=>{
        alert("issue add")
        setname("");
        setsubject("");
        setproblem("");
        setdate("");
      }).catch((err)=>{alert(err)})
    }

    
        
    return(
      <div>
         <Header_issue/>
      <div className="container">
      <div className="text">
         issue Adding Form
      </div>
      <form action="#">
         <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
               <label className="issue name"></label>
        <input type="text" className="name_i" placeholder="name" onChange={e=>{setname(e.target.value);}}/>
            </div>
            <div className="input-data">
               <div className="underline"></div>
              <label className="subject"></label>
       <input type="text" placeholder="subject" onChange={e=>{setsubject(e.target.value);}}/>
            </div>
         </div>
         <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
                <label className="Gender"></label>    
       <input type="text" placeholder="problem" onChange={e=>{setproblem(e.target.value);}}/>       
            </div>
            </div> 
            <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
                <label className="issue"></label>
       <input type="date" placeholder="date" onChange={e=>{setdate(e.target.value);}}/>
            </div>
            </div> 
                  <button className="button" onClick={senddata}>Submit</button>
              
      </form>
      </div>
      </div>
   
    )
}

export default Addissue;