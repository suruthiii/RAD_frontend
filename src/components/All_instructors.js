import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import './view_style.css'
import Header_user from "./Header_user";

export default function All_instructors()
{
    const [instructors, setInstructors] = useState([])
    const [modeldata, setModeldata] = useState({
        name : '',
        age : '',
        gender : '',
        instructor_course : ''

    })  
 
const getdata = () => {
    fetch('http://localhost:8070/instructor/view_instructors/')
    .then(response=>response.json())
    .then(res=>setInstructors(res))
    
}

    useEffect (() => {
        getdata();
    } , []);
    
const delete_instructor = ((id) => {
    axios.delete("http://localhost:8070/instructor/delete/" + id).then(()=>{
        alert("instructor delete")
        }).catch((err)=>{alert(err)})
})  
    return(
        <div>
         <Header_user/>
        <div className="container">
            <h1 className="tital">All Instructors</h1>
        <table>
            <thead>
                <tr>
                    <th className="head">
                    Name&nbsp;&nbsp;&nbsp;&nbsp;
                    </th>

                    <th className="head">
                    &nbsp;&nbsp;&nbsp;&nbsp;Age&nbsp;&nbsp;&nbsp;&nbsp;
                    </th>

                    <th className="head">
                    &nbsp;&nbsp;&nbsp;&nbsp;Gender&nbsp;&nbsp;&nbsp;&nbsp;
                    </th>

                    <th className="head">
                    ins_course(s)&nbsp;
                    </th>
                </tr>
            </thead>
            <tbody className="body">
                {instructors.map((names,index)=>
                <tr key={index}>
                    <td className="data">{names.name}</td>
                    <td className="data">{names.age}</td>
                    <td className="data">{names.gender}</td>
                    <td className="data">{names.instructor_course}</td>
                    <td>
                        <Link className="link" to={`/update_instructor/${names._id}`}>update</Link>
                        &nbsp;&nbsp;&nbsp;
                        <button className="delete_button" onClick={() => delete_instructor(names._id)}>delete</button>
                
                    </td>
                    <br></br><br></br>
                </tr>
                )}

                
            </tbody>
        </table>
        
        </div>
        </div>
    )
} 