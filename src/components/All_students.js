import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import "./view_style.css";
import Header_user from "./Header_user";
import NavBar from "./Headers/MainHeader";

export default function All_students() {
  const [students, setStudents] = useState([]);
  const [modeldata, setModeldata] = useState({
    name: "",
    age: "",
    gender: "",
    course: "",
  });

  const getdata = () => {
    fetch("http://localhost:8070/student/view_students/")
      .then((response) => response.json())
      .then((res) => setStudents(res));
  };

  useEffect(() => {
    getdata();
  }, []);

  const delete_student = (id) => {
    axios
      .delete("http://localhost:8070/student/delete/" + id)
      .then(() => {
        alert("Student deleted");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <Header_user />
      <NavBar />
      <div className="mt-[50px] ml-[20rem] px-[200px] flex flex-col item-center">
        <h1
          className=""
          style={{ fontWeight: 1000, textAlign: "center", fontSize: "30px" }}
        >
          All Students
        </h1>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-white uppercase dark:bg-gray-700 dark:text-gray-400 bg-[#A937FF] opacity-[70%]">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Student Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Age
                </th>
                <th scope="col" class="px-6 py-3">
                  Gender
                </th>
                <th scope="col" class="px-6 py-3">
                  Course
                </th>
                <th scope="col" class="px-6 py-3 text-center w-[150px]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {student.name}
                  </th>
                  <td class="px-6">{student.age}</td>
                  <td class="px-6">{student.gender}</td>
                  <td class="px-6">{student.course}</td>
                  <td class="px-6 text-left">
                    <Link
                      to={`/update_student/${student._id}`}
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                    >
                      Edit
                    </Link>
                    |
                    <Link
                      onClick={() => delete_student(student._id)}
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
                    >
                      Delete
                    </Link>
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
