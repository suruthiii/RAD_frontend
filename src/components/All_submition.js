import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import './view_style.css'
import Header_submition from "./Header_submition";

export default function All_submition()
{
    const [submition, setsubmition] = useState([])
    const [modeldata, setModeldata] = useState({
        name : '',
        aname : "",
        link : "",
        date : ""

    })  
 
const getdata = () => {
    fetch('http://localhost:8070/submition/view_submitions/')
    .then(response=>response.json())
    .then(res=>setsubmition(res))
    
}

    useEffect (() => {
        getdata();
    } , []);
    
    const delete_submition = ((id) => {
        axios.delete("http://localhost:8070/submition/delete/" + id).then(()=>{
            alert("submition delete")
          }).catch((err)=>{alert(err)})
    })  
    return(
        <div>
         <Header_submition/>
        <div className="container">
            <h1 className="tital">All submition</h1>
            <table>
                <thead>
                    <tr>
                        <th className="head">
                        Name&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>

                        <th className="head">
                        &nbsp;&nbsp;&nbsp;&nbsp;Assignment&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>
                        <th className="head">
                        &nbsp;&nbsp;&nbsp;&nbsp;link&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>
                        <th className="head">
                        date&nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody className="body">
                    {submition.map((names,index)=>
                    <tr key={index}>
                        <td className="data">{names.name}</td>
                        <td className="data">{names.aname}</td>
                        <td className="data">{names.link}</td>
                        <td className="data">{names.date}</td>
                        <td>
                            <Link className="link" to={`/update_submition/${names._id}`}>update</Link>
                            &nbsp;&nbsp;&nbsp;
                            <button className="delete_button" onClick={() => delete_submition(names._id)}>delete</button>
                    
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