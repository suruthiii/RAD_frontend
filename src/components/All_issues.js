import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import './view_style.css'
import Header_issue from "./Header_issue";

export default function All_issue()
{
    const [issue, setissue] = useState([])
    const [modeldata, setModeldata] = useState({
        name : '',
        subject : "",
        problem : "",
        date : ""

    })  
 
const getdata = () => {
    fetch('http://localhost:8070/issue/view_issues/')
    .then(response=>response.json())
    .then(res=>setissue(res))
    
}

    useEffect (() => {
        getdata();
    } , []);
    
    const delete_issue = ((id) => {
        axios.delete("http://localhost:8070/issue/delete/" + id).then(()=>{
            alert("issue delete")
          }).catch((err)=>{alert(err)})
    })  
    return(
        <div>
         <Header_issue/>
        <div className="container">
            <h1 className="tital">All issue</h1>
            <table>
                <thead>
                    <tr>
                        <th className="head">
                        &nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>

                        <th className="head">
                        &nbsp;&nbsp;&nbsp;&nbsp;subject&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>
                        <th className="head">
                        &nbsp;&nbsp;&nbsp;&nbsp;problem&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>
                        <th className="head">
                        date&nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody className="body">
                    {issue.map((names,index)=>
                    <tr key={index}>
                        <td className="data">{names.name}&nbsp;</td>
                        <td className="data">{names.subject}&nbsp;</td>
                        <td className="data">{names.problem}&nbsp;</td>
                        <td className="data">{names.date}&nbsp;&nbsp;&nbsp;</td>
                        <td>
                            <Link className="link" to={`/update_issue/${names._id}`}>update</Link>
                            &nbsp;&nbsp;&nbsp;
                            <button className="delete_button" onClick={() => delete_issue(names._id)}>delete</button>
                    
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