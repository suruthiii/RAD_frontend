import React, { useState, useEffect } from "react";
import { Progress } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Lesson from "./MiddleContainer/Lesson";

const Home = () => {
  const [courses, setcourse] = useState([]);

  const getdata = () => {
    fetch("http://localhost:8070/course/view_courses/")
      .then((response) => response.json())
      .then((res) => setcourse(res));
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div class="text-xl">My Lessons</div>
      <div class="flex justify-between px-3 mt-5">
        <div class="flex items-center w-[35%]">Lesson Name</div>
        <div class="flex items-center w-[20%]">Progress</div>
        <div class="w-[25%] ml-10 flex items-center">Instructor</div>
        <div class="w-[5%]"></div>
      </div>
      <div class="p-2">
        {courses.map((course, index) => (
          <Lesson
            key={index}
            lesson={course.coursename}
            progress={20}
            instructor={course.instructor}
            link={`/viewCourse/${course._id}`}
            color="#1e00ff"
          />
        ))}
      </div>
    </>
  );
};

export default Home;
