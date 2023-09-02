import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <div>{course.coursename}</div>
      <div>{course.aname}</div>
      <div>{course.task}</div>
      <div>{course.duedate}</div>
    </div>
  );
}
