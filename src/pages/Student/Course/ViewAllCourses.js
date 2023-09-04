import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../../components/Headers/StudentHeader";

export default function ViewAllCourses() {
  const [courseName, setCourseName] = useState("");
  const [year, setYear] = useState("");
  const [duration, setDuration] = useState("");
  const [credit, setCredit] = useState("");
  const [instructor, setInstructor] = useState("");
  const [studentName, setStudentName] = useState("");
  const [progress, setProgress] = useState("");
  const [isEnrolling, setIsEnrolling] = useState(false);

  const sendData = () => {
    const newcourse = {
      courseName,
      year,
      duration,
      credit,
      instructor,
      studentName,
      progress,
    };

    axios
      .post("http://localhost:8070/course_student/register", newcourse)
      .then(() => {
        alert("Enrolled");
        setCourseName("");
        setYear("");
        setDuration("");
        setCredit("");
        setInstructor("");
        setStudentName("");
        setProgress("");
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setIsEnrolling(false);
      });
  };

  useEffect(() => {
    if (isEnrolling) {
      sendData();
    }
  }, [isEnrolling, courseName, year, duration, credit, instructor, studentName, progress]);

  const enrollStudent = (
    studentName,
    courseName,
    year,
    duration,
    credit,
    instructor,
    progress
  ) => {
    if (
      studentName === "" ||
      courseName === "" ||
      year === "" ||
      duration === "" ||
      credit === "" ||
      instructor === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    setCourseName(courseName);
    setYear(year);
    setDuration(duration);
    setCredit(credit);
    setInstructor(instructor);
    setStudentName(studentName);
    setProgress(progress);
    setIsEnrolling(true);
  };

  const [courses, setcourse] = useState([]);

  const getdata = () => {
    fetch("http://localhost:8070/course/view_courses/")
      .then((response) => response.json())
      .then((res) => setcourse(res));
  };

  useEffect(() => {
    getdata();
  }, []);

  const delete_course = (id) => {
    axios
      .delete("http://localhost:8070/course/delete/" + id)
      .then(() => {
        alert("Course deleted");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <NavBar />
      <div className="mt-[100px] ml-[20rem] px-[200px] flex flex-col item-center">
        <h1
          className=""
          style={{ fontWeight: 1000, textAlign: "center", fontSize: "30px" }}
        >
          All Courses
        </h1>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-white uppercase dark:bg-gray-700 dark:text-gray-400 bg-[#A937FF] opacity-[70%]">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Course name
                </th>
                <th scope="col" class="px-6 py-3">
                  Year
                </th>
                <th scope="col" class="px-6 py-3">
                  Duration
                </th>
                <th scope="col" class="px-6 py-3">
                  Credit
                </th>
                <th scope="col" class="px-6 py-3 text-center w-[150px]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {course.coursename}
                  </th>
                  <td class="px-6">{course.year}</td>
                  <td class="px-6">{course.duration}</td>
                  <td class="px-6">{course.credit}</td>
                  <td class="px-6 text-center">
                    {/* <Link
                      to={`/update_course/${course._id}`}
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                    >
                      Edit
                    </Link>
                    |
                    <Link
                      onClick={() => delete_course(course._id)}
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
                    >
                      Delete
                    </Link> */}
                    <button
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() =>
                        enrollStudent(
                          "student",
                          course.coursename,
                          2021,
                          course.duration,
                          course.credit,
                          course.instructor,
                          0
                        )
                      }
                    >
                      Enroll
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
