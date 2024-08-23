import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import Header_user from "./Header_user";

export default function All_lecturers()
{
    const [lecturers, setLecturer] = useState([])
    const [modeldata, setModeldata] = useState({
        name : '',
        age : '',
        gender : '',
        lecture_course : ''

    })  
 
const getdata = () => {
    fetch('http://localhost:8070/lecturer/view_lecturers/')
    .then(response=>response.json())
    .then(res=>setLecturer(res))
    
}

    useEffect (() => {
        getdata();
    } , []);

const delete_lecturer = ((id) => {
    axios.delete("http://localhost:8070/lecturer/delete/" + id).then(()=>{
        alert("lecturer delete")
        }).catch((err)=>{alert(err)})
})  
    return(
        <div>
         <Header_user/>
        <div className="container">
            <h1 className="tital">All Lecturers</h1>
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
                        lec_course(s)&nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody className="body">
                    {lecturers.map((names,index)=>
                    <tr key={index}>
                        <td className="data">{names.name}</td>
                        <td className="data">{names.age}</td>
                        <td className="data">{names.gender}</td>
                        <td className="data">{names.lecture_course}</td>
                        <td>
                            <Link className="link" to={`/update_lecturer/${names._id}`}>update</Link>
                            &nbsp;&nbsp;&nbsp;
                            <button className="delete_button" onClick={() => delete_lecturer(names._id)}>delete</button>
                    
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