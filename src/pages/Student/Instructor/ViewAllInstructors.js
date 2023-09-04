import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import NavBar from "../../../components/Headers/StudentHeader";

export default function All_instructors() {
  const [instructors, setInstructors] = useState([]);
  const [modeldata, setModeldata] = useState({
    name: "",
    age: "",
    gender: "",
    instructor_course: "",
  });

  const getdata = () => {
    fetch("http://localhost:8070/instructor/view_instructors/")
      .then((response) => response.json())
      .then((res) => setInstructors(res));
  };

  useEffect(() => {
    getdata();
  }, []);

  const delete_instructor = (id) => {
    axios
      .delete("http://localhost:8070/instructor/delete/" + id)
      .then(() => {
        alert("Instructor deleted");
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
          All Instructors
        </h1>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-white uppercase dark:bg-gray-700 dark:text-gray-400 bg-[#A937FF] opacity-[70%]">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Instructor Name
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
              {instructors.map((instructor, index) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {instructor.name}
                  </th>
                  <td class="px-6">{instructor.age}</td>
                  <td class="px-6">{instructor.gender}</td>
                  <td class="px-6">{instructor.instructor_course}</td>
                  <td class="px-6 text-left">
                    <Link
                      to={`/update_instructor/${instructor._id}`}
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                    >
                      Edit
                    </Link>
                    |
                    <Link
                      onClick={() => delete_instructor(instructor._id)}
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
      {/* <div className="container">
        <h1 className="tital">All Instructors</h1>
        <table>
          <thead>
            <tr>
              <th className="head">Name&nbsp;&nbsp;&nbsp;&nbsp;</th>

              <th className="head">
                &nbsp;&nbsp;&nbsp;&nbsp;Age&nbsp;&nbsp;&nbsp;&nbsp;
              </th>

              <th className="head">
                &nbsp;&nbsp;&nbsp;&nbsp;Gender&nbsp;&nbsp;&nbsp;&nbsp;
              </th>

              <th className="head">ins_course(s)&nbsp;</th>
            </tr>
          </thead>
          <tbody className="body">
            {instructors.map((names, index) => (
              <tr key={index}>
                <td className="data">{names.name}</td>
                <td className="data">{names.age}</td>
                <td className="data">{names.gender}</td>
                <td className="data">{names.instructor_course}</td>
                <td>
                  <Link className="link" to={`/update_instructor/${names._id}`}>
                    update
                  </Link>
                  &nbsp;&nbsp;&nbsp;
                  <button
                    className="delete_button"
                    onClick={() => delete_instructor(names._id)}
                  >
                    delete
                  </button>
                </td>
                <br></br>
                <br></br>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
}
