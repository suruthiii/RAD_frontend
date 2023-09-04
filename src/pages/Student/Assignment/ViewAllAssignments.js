import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import '../../../components/view_style.css'
import NavBar from "../../../components/Headers/StudentHeader";

export default function ViewAllAssignments()
{
    const [assignment, setassignment] = useState([])
    const [modeldata, setModeldata] = useState({
        coursename : '',
        aname : "",
        task : "",
        duedate : ""

    })  
 
const getdata = () => {
    fetch('http://localhost:8070/assignment/view_assignments/')
    .then(response=>response.json())
    .then(res=>setassignment(res))
    
}

    useEffect (() => {
        getdata();
    } , []);
    
    const delete_assignment = ((id) => {
        axios.delete("http://localhost:8070/assignment/delete/" + id).then(()=>{
            alert("assignment delete")
          }).catch((err)=>{alert(err)})
    })  
    return(
        <div>
         <NavBar/>
        <div className="container">
            <h1 className="tital">All assignment</h1>
            <table>
                <thead>
                    <tr>
                        <th className="head">
                        C_name&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>

                        <th className="head">
                        &nbsp;&nbsp;&nbsp;&nbsp;A_name&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>
                        <th className="head">
                        &nbsp;&nbsp;&nbsp;&nbsp;task&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>
                        <th className="head">
                        duedate&nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody className="body">
                    {assignment.map((names,index)=>
                    <tr key={index}>
                        <td className="data">{names.coursename}</td>
                        <td className="data">{names.aname}</td>
                        <td className="data">{names.task}</td>
                        <td className="data">{names.duedate}</td>
                        <td>
                            <Link className="link" to={`/update_assignment/${names._id}`}>update</Link>
                            &nbsp;&nbsp;&nbsp;
                            <button className="delete_button" onClick={() => delete_assignment(names._id)}>delete</button>
                    
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