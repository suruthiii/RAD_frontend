import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import Header_user from "./Header_user";
import NavBar from "./Headers/MainHeader";

export default function All_lecturers() {
  const [lecturers, setLecturer] = useState([]);
  const [modeldata, setModeldata] = useState({
    name: "",
    age: "",
    gender: "",
    lecture_course: "",
  });

  const getdata = () => {
    fetch("http://localhost:8070/lecturer/view_lecturers/")
      .then((response) => response.json())
      .then((res) => setLecturer(res));
  };

  useEffect(() => {
    getdata();
  }, []);

  const delete_lecturer = (id) => {
    axios
      .delete("http://localhost:8070/lecturer/delete/" + id)
      .then(() => {
        alert("Lecturer deleted");
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
          All Lecturers
        </h1>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-white uppercase dark:bg-gray-700 dark:text-gray-400 bg-[#A937FF] opacity-[70%]">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Lecturer Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Age
                </th>
                <th scope="col" class="px-6 py-3">
                  Gender
                </th>
                <th scope="col" class="px-6 py-3">
                  Courses
                </th>
                <th scope="col" class="px-6 py-3 text-center w-[150px]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {lecturers.map((lecturer, index) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {lecturer.name}
                  </th>
                  <td class="px-6">{lecturer.age}</td>
                  <td class="px-6">{lecturer.gender}</td>
                  <td class="px-6">{lecturer.lecture_course}</td>
                  <td class="px-6 text-left">
                    <Link
                      to={`/update_lecturer/${lecturer._id}`}
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                    >
                      Edit
                    </Link>
                    |
                    <Link
                      onClick={() => delete_lecturer(lecturer._id)}
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
