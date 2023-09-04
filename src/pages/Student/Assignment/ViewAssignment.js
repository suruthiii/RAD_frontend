import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../../components/Headers/StudentHeader";

export default function ViewAssignment() {
  const { id } = useParams();
  const [course, setCourse] = useState([]);

  const getData = () => {
    fetch(`http://localhost:8070/assignment/viewAssignment/${id}`)
      .then((response) => response.json())
      .then((res) => setCourse(res));
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div>
      <NavBar />
      <div className="mt-[100px] ml-[20rem] px-[200px] flex flex-col item-center">
        <div>{course.coursename}</div>
        <div>{course.aname}</div>
        <div>{course.task}</div>
        <div>{course.duedate}</div>
      </div>
    </div>
  );
}
