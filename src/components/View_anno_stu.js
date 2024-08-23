import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import './view_style.css'
import Header_view_anno from "./Header_view_anno";

export default function View_anno_stu()
{
    const [announcement, setannouncement] = useState([])
    const [modeldata, setModeldata] = useState({
        name : '',
        role : "",
        message : "",
        date : ""

    })  
 
const getdata = () => {
    fetch('http://localhost:8070/view_annoounce/view_announcements_stu/')
    .then(response=>response.json())
    .then(res=>setannouncement(res))
    
}

    useEffect (() => {
        getdata();
    } , []);
      
    return(
        <div>
         <Header_view_anno/>
        <div className="container">
            <h1 className="tital">All announcement</h1>
            <table>
                <thead>
                    <tr>
                    <th className="head">
                        &nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>

                        <th className="head">
                        &nbsp;&nbsp;&nbsp;&nbsp;role&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>
                        <th className="head">
                        &nbsp;&nbsp;&nbsp;&nbsp;message&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>
                        <th className="head">
                        date&nbsp;
                        </th> 
                    </tr>
                </thead>
                <tbody className="body">
                    {announcement.map((names,index)=>
                    <tr key={index}>
                        <td className="data">{names.name}&nbsp;</td>
                        <td className="data">{names.role}&nbsp;</td>
                        <td className="data">{names.message}&nbsp;&nbsp;&nbsp;</td>
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