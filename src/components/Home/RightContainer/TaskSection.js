import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

const RightContainer = () => {
  const [assignments, setassignment] = useState([]);
  const [modeldata, setModeldata] = useState({
    coursename: "",
    aname: "",
    task: "",
    duedate: "",
  });

  const getdata = () => {
    fetch("http://localhost:8070/view_assignment/View_Assignment_stu/")
      .then((response) => response.json())
      .then((res) => setassignment(res));
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      {assignments.map((assignment, index) => (
        <TaskItem
          key={index}
          name={assignment.aname}
          description={assignment.task}
          link={`/viewAssignment/${assignment._id}`}
          color="red"
        />
      ))}
    </>
  );
};

export default RightContainer;
