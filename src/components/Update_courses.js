import React,{useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './add_style.css'
import Header_course from "./Header_course";

export default function Update_course()
{
    const {id} = useParams()
    const [coursename , setcoursename]  = useState();
    const [year , setyear]  = useState();
    const [duration , setduration]  = useState();
    const [credit , setcredit]  = useState();

    function senddata(e)
    {
        e.preventDefault();

        const newcourse = {
            coursename,
            year,
            duration,
            credit
        }


      axios.put("http://localhost:8070/course/update_course/" + id,newcourse).then(()=>{
        alert("course update")
        setcoursename("");
        setyear("");
        setduration("");
        setcredit("");
      }).catch((err)=>{alert(err)})
    }

    return(
        <div>
           <Header_course/>
        <div className="container">
        <div className="text">
           Student Application Form
        </div>
        <form action="#">
           <div className="form-row">
              <div className="input-data">
                 <div className="underline"></div>
                 <label className="Course name"></label>
          <input type="text" className="name_i" placeholder="Course name" onChange={e=>{setcoursename(e.target.value);}}/>
              </div>
              <div className="input-data">
                 <div className="underline"></div>
                <label className="Year"></label>
         <input type="number" placeholder="Year" onChange={e=>{setyear(e.target.value);}}/>
              </div>
           </div>
           <div className="form-row">
              <div className="input-data">
                 <div className="underline"></div>
                  <label className="Gender"></label>    
         <input type="text" placeholder="Course Duration" onChange={e=>{setduration(e.target.value);}}/>       
              </div>
              </div> 
              <div className="form-row">
              <div className="input-data">
                 <div className="underline"></div>
                  <label className="Course"></label>
         <input type="text" placeholder="Course Credit" onChange={e=>{setcredit(e.target.value);}}/>
              </div>
              </div> 
                    <button className="button" onClick={senddata}>Submit</button>
                
        </form>
        </div>
        </div>
     
      )

}