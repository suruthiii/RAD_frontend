import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import './view_style.css'
import Header_view_course from "./Header_view_course";

export default function View_course_stu()
{
    const [course, setcourse] = useState([])
    const [modeldata, setModeldata] = useState({
        coursename : '',
        year : "",
        duration : "",
        credit : ""

    })  
 
const getdata = () => {
    fetch('http://localhost:8070/view_course/View_course_stu/')
    .then(response=>response.json())
    .then(res=>setcourse(res))
    
}

    useEffect (() => {
        getdata();
    } , []);
    
return(
        <div>
         <Header_view_course/>
        <div className="container">
            <h1 className="tital">All course</h1>
            <table>
                <thead>
                    <tr>
                        <th className="head">
                        Course Name&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>

                        <th className="head">
                        &nbsp;&nbsp;&nbsp;&nbsp;Year&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>
                        <th className="head">
                        &nbsp;&nbsp;&nbsp;&nbsp;Duration&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>
                        <th className="head">
                        Credit&nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody className="body">
                    {course.map((names,index)=>
                    <tr key={index}>
                        <td className="data">{names.coursename}</td>
                        <td className="data">{names.year}</td>
                        <td className="data">{names.duration}</td>
                        <td className="data">{names.credit}</td>
                        <br></br><br></br>
                    </tr>
                    )}

                    
                </tbody>
            </table>
            
            </div>
            </div>
    )
} 