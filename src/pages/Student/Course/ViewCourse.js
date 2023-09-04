import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Header_course from "../../../components/Header_course";
import "../../../components/view_style.css";

export default function ViewCourse() {
  const { id } = useParams();
  const [course, setCourse] = useState([]);

  const getData = () => {
    fetch(`http://localhost:8070/course/viewCourse/${id}`)
      .then((response) => response.json())
      .then((res) => setCourse(res));
  };

  useEffect(() => {
    getData();
  }, [id]); 

  return (
    <div>
      <Header_course />
      <div>{course.coursename}</div>
      <div>{course.year}</div>
      <div>{course.credit}</div>
      <div>{course.duration}</div>  
      <div>{course.instructor}</div>
    </div>
  );
}
