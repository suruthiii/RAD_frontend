import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import './view_style.css'
import Header_view_assignment from "./Header_view_assignment";

export default function View_Assignment_stu()
{
    const [assignment, setassignment] = useState([])
    const [modeldata, setModeldata] = useState({
        coursename : '',
        aname : "",
        task : "",
        duedate : ""

    })  
 
const getdata = () => {
    fetch('http://localhost:8070/view_assignment/View_Assignment_stu/')
    .then(response=>response.json())
    .then(res=>setassignment(res))
    
}

    useEffect (() => {
        getdata();
    } , []);
     
    return(
        <div>
         <Header_view_assignment/>
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
                    task&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>
                        <th className="head">
                        &nbsp;&nbsp;duedate&nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody className="body">
                    {assignment.map((names,index)=>
                    <tr key={index}>
                        <td className="data">{names.coursename}&nbsp;&nbsp;&nbsp;</td>
                        <td className="data">{names.aname}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td className="data">{names.task}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td className="data">{names.duedate}&nbsp;&nbsp;&nbsp;</td>
                        <br></br><br></br>
                    </tr>
                    )}

                    
                </tbody>
            </table>
            
            </div>
            </div>
    )
} 