import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import './view_style.css'
import Header_user from "./Header_user";

export default function All_cleaningstaff()
{
    const [cleaningstaff, setCleaningstaff] = useState([])
    const [modeldata, setModeldata] = useState({
        name : '',
        age : '',
        gender : '',
        working_hours : ''

    })  
 
const getdata = () => {
    fetch('http://localhost:8070/cleaningstaff/view_cleaningstaff/')
    .then(response=>response.json())
    .then(res=>setCleaningstaff(res))
    
}

    useEffect (() => {
        getdata();
    } , []);

const delete_cleaningstaff = ((id) => {
    axios.delete("http://localhost:8070/cleaningstaff/delete/" + id).then(()=>{
        alert("cleaningstaff delete")
        }).catch((err)=>{alert(err)})
})  
    return(
        <div>
         <Header_user/>
        <div className="container">
            <h1 className="tital">All Cleaning Staff</h1>
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
                        W_Hrs&nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody className="body">
                    {cleaningstaff.map((names,index)=>
                    <tr key={index}>
                        <td className="data">{names.name}</td>
                        <td className="data">{names.age}</td>
                        <td className="data">{names.gender}</td>
                        <td className="data">{names.working_hours}</td>
                        <td>
                            <Link className="link" to={`/update_cleaningstaff/${names._id}`}>update</Link>
                            &nbsp;&nbsp;&nbsp;
                            <button className="delete_button" onClick={() => delete_cleaningstaff(names._id)}>delete</button>
                    
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