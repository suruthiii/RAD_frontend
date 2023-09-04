import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import '../../../components/view_style.css';
import NavBar from "../../../components/Headers/StudentHeader";

export default function All_announcement()
{
    const [announcement, setannouncement] = useState([])
    const [modeldata, setModeldata] = useState({
        name : '',
        role : "",
        message : "",
        date : ""
    })  
 
const getdata = () => {
    fetch('http://localhost:8070/announcement/view_announcements/')
    .then(response=>response.json())
    .then(res=>setannouncement(res))
    
}

    useEffect (() => {
        getdata();
    } , []);
    
    const delete_announcement = ((id) => {
        axios.delete("http://localhost:8070/announcement/delete/" + id).then(()=>{
            alert("announcement delete")
          }).catch((err)=>{alert(err)})
    })  
    return(
        <div>
         <NavBar/>
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
                        <td>
                            <Link className="link" to={`/update_announcement/${names._id}`}>update</Link>
                            &nbsp;&nbsp;&nbsp;
                            <button className="delete_button" onClick={() => delete_announcement(names._id)}>delete</button>
                    
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