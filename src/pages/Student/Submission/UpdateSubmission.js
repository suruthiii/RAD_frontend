import React,{useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../../../components/add_style.css'
import Header_submition from "../../../components/Header_submition";

export default function Update_submition()
{
    const {id} = useParams()
    const [name , setname]  = useState();
    const [aname , setaname]  = useState();
    const [link , setlink]  = useState();
    const [date , setdate]  = useState();

    function senddata(e)
    {
        e.preventDefault();

        const newsubmition = {
            name,
            aname,
            link,
            date
        }


      axios.put("http://localhost:8070/submition/update_submition/" + id,newsubmition).then(()=>{
        alert("submition update")
        setname("");
        setaname("");
        setlink("");
        setdate("");
      }).catch((err)=>{alert(err)})
    }

    return(
        <div>
           <Header_submition/>
        <div className="container">
        <div className="text">
          submition update Form
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
                <label className="aname"></label>
         <input type="text" placeholder="aname" onChange={e=>{setaname(e.target.value);}}/>
              </div>
           </div>
           <div className="form-row">
              <div className="input-data">
                 <div className="underline"></div>
                  <label className="Gender"></label>    
         <input type="text" placeholder="link" onChange={e=>{setlink(e.target.value);}}/>       
              </div>
              </div> 
              <div className="form-row">
              <div className="input-data">
                 <div className="underline"></div>
                  <label className="submition"></label>
         <input type="date" placeholder="date" onChange={e=>{setdate(e.target.value);}}/>
              </div>
              </div> 
                    <button className="button" onClick={senddata}>Submit</button>
                
        </form>
        </div>
        </div>
     
      )

}