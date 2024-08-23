import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import './view_style.css'
import Header_view_submition from "./Header_view_submition";


export default function View_submition_lec()
{
    const [submition, setsubmition] = useState([])
    const [modeldata, setModeldata] = useState({
        name : '',
        aname : "",
        link : "",
        date : ""

    })  
 
const getdata = () => {
    fetch('http://localhost:8070/view_submition/view_submition_lec/')
    .then(response=>response.json())
    .then(res=>setsubmition(res))
    
}

    useEffect (() => {
        getdata();
    } , []);
     
    return(
        <div>
         <Header_view_submition/>
        <div className="container">
            <h1 className="tital">All submition</h1>
            <table>
                <thead>
                    <tr>
                        <th className="head">
                        &nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;
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
                        <td className="data">{names.name}&nbsp;</td>
                        <td className="data">{names.aname}&nbsp;</td>
                        <td className="data">{names.link}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td className="data">{names.date}&nbsp;&nbsp;&nbsp;</td>
                        <br></br><br></br>
                    </tr>
                    )}

                    
                </tbody>
            </table>
            
            </div>
            </div>
    )
} 