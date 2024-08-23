import React,{useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './add_style.css'
import Header_user from "./Header_user";

export default function Update_instructor()
{
    const {id} = useParams()
    const [name , setname]  = useState();
    const [age , setage]  = useState();
    const [gender , setgender]  = useState();
    const [instructor_course , setinstructor_course]  = useState();

    function senddata(e)
    {
        e.preventDefault();

        const newinstructor = {
            name,
            age,
            gender,
            instructor_course
        }

      axios.put("http://localhost:8070/instructor/update_instructor/" + id,newinstructor).then(()=>{
        alert("instructor update")
        setname("");
        setage("");
        setgender("");
        setinstructor_course("");
      }).catch((err)=>{alert(err)})
    }

    return(
      <div>
         <Header_user/>
      <div className="container">
      <div className="text">
         Update Instructor
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
                <label className="instructor_course"></label>
       <input type="text" placeholder="Your instructor course(s)" onChange={e=>{setinstructor_course(e.target.value);}}/>
            </div>
            </div>
                  <button className="button" onClick={senddata}>Submit</button>
              
      </form>
      </div>
      </div>
    )

}