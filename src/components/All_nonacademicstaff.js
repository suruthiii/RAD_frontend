import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import './view_style.css'
import Header_user from "./Header_user";

export default function All_nonacademicstaff()
{
    const [nonacademicstaff, setNonacademicstaff] = useState([])
    const [modeldata, setModeldata] = useState({
        name : '',
        age : '',
        gender : '',
        working_field : ''

    })  
 
const getdata = () => {
    fetch('http://localhost:8070/nonacademicstaff/view_nonacademicstaff/')
    .then(response=>response.json())
    .then(res=>setNonacademicstaff(res))
    
}

    useEffect (() => {
        getdata();
    } , []);
    
const delete_nonacademicstaff = ((id) => {
    axios.delete("http://localhost:8070/nonacademicstaff/delete/" + id).then(()=>{
        alert("nonacademicstaff delete")
        }).catch((err)=>{alert(err)})
})  
    return(
        <div>
         <Header_user/>
        <div className="container">
            <h1 className="tital">All Non Academic Staff</h1>
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
                        Work_field(s)&nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody className="body">
                    {nonacademicstaff.map((names,index)=>
                    <tr key={index}>
                        <td className="data">{names.name}</td>
                        <td className="data">{names.age}</td>
                        <td className="data">{names.gender}</td>
                        <td className="data">{names.working_field}</td>
                        <td>
                            <Link className="link" to={`/update_nonacademicstaff/${names._id}`}>update</Link>
                            &nbsp;&nbsp;&nbsp;
                            <button className="delete_button" onClick={() => delete_nonacademicstaff(names._id)}>delete</button>
                    
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