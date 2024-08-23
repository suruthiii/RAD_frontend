import React,{useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './add_style.css'
import Header_anno from "./Header_anno";

export default function Update_announcement()
{
    const {id} = useParams()
    const [name , setname]  = useState();
    const [role , setrole]  = useState();
    const [message , setmessage]  = useState();
    const [date , setdate]  = useState();

    function senddata(e)
    {
        e.preventDefault();

        const newannouncement = {
            name,
            role,
            message,
            date
        }


      axios.put("http://localhost:8070/announcement/update_announcement/" + id,newannouncement).then(()=>{
        alert("announcement update")
        setname("");
        setrole("");
        setmessage("");
        setdate("");
      }).catch((err)=>{alert(err)})
    }

    return(
        <div>
           <Header_anno/>
        <div className="container">
        <div className="text">
          Announcement update Form
        </div>
        <form action="#">
           <div className="form-row">
              <div className="input-data">
                 <div className="underline"></div>
                 <label className="name"></label>
          <input type="text" className="name_i" placeholder="name" onChange={e=>{setname(e.target.value);}}/>
              </div>
              <div className="input-data">
                 <div className="underline"></div>
                <label className="role"></label>
         <input type="text" placeholder="role" onChange={e=>{setrole(e.target.value);}}/>
              </div>
           </div>
           <div className="form-row">
              <div className="input-data">
                 <div className="underline"></div>
                  <label className="Gender"></label>    
         <input type="text" placeholder="message" onChange={e=>{setmessage(e.target.value);}}/>       
              </div>
              </div> 
              <div className="form-row">
              <div className="input-data">
                 <div className="underline"></div>
                  <label className="announcement"></label>
         <input type="date" placeholder="date" onChange={e=>{setdate(e.target.value);}}/>
              </div>
              </div> 
                    <button className="button" onClick={senddata}>Submit</button>
                
        </form>
        </div>
        </div>
     
      )

}