import React, { useState } from "react";
import axios from "axios";
import "./add_style.css";
import Header_user from "./Header_user";
import NavBar from "./Headers/MainHeader";

export default function AddInstructor() {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [role, setrole] = useState("");
  const [Username, setUsername] = useState("");
  const [Mobile_NO, setMobile_NO] = useState("");
  const [Temporary_Password, setTemporary_Password] = useState("");

  function senddata(e) {
    e.preventDefault();

    const newsignup = {
      first_name,
      last_name,
      role,
      Username,
      Mobile_NO,
      Temporary_Password,
    };

    axios
      .post("http://localhost:8070/signup", newsignup)
      .then(() => {
        alert("Successful Registration");
        setfirst_name("");
        setlast_name("");
        setrole("");
        setUsername("");
        setMobile_NO("");
        setTemporary_Password("");
        window.location.href = "./";
      })
      .catch((err) => {
        alert(err);
      });
  }

  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [instructor_course, setinstructor_course] = useState("");
  function senddata(e) {
    e.preventDefault();

    const newinstructor = {
      name,
      age,
      gender,
      instructor_course,
    };

    axios
      .post("http://localhost:8070/instructor/add_instructor", newinstructor)
      .then(() => {
        alert("instructor add");
        setname("");
        setage("");
        setgender("");
        setinstructor_course("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <>
      <NavBar />
      <div className="mt-[50px] ml-[20rem] px-[200px] flex flex-col item-center">
        {/* <Header_user /> */}
        {/* <div className="container">
        <div className="text">Instructor Application Form</div>
        <form action="#">
          <div className="form-row">
            <div className="input-data">
              <div className="underline"></div>
              <label className="name"></label>
              <input
                type="text"
                className="name_i"
                placeholder="Your name"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
            <div className="input-data">
              <div className="underline"></div>
              <label className="age"></label>
              <input
                type="number"
                placeholder="Your age"
                onChange={(e) => {
                  setage(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <div className="underline"></div>
              <label className="Gender"></label>
              <input
                type="text"
                placeholder="Your Gender"
                onChange={(e) => {
                  setgender(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <div className="underline"></div>
              <label className="setinstructor_course"></label>
              <input
                type="text"
                placeholder="Your instructor course(s)"
                onChange={(e) => {
                  setinstructor_course(e.target.value);
                }}
              />
            </div>
          </div>
          <button className="button" onClick={senddata}>
            Submit
          </button>
        </form>
      </div> */}

        <div
          class="bg-white w-[600px] h-[580px] rounded-xl pt-4 mt-20 border-2"
          style={{ boxShadow: "0 0 10px 0.1px #d6d6d6" }}
        >
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              class="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Instructor Application Form
            </h2>
          </div>

          <div class="mt-10 w-full px-10">
            <form class="space-y-6">
              <div class="flex justify-center">
                <div class="mx-8 w-full">
                  <label
                    for="name"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      className="name_i"
                      placeholder="Your name"
                      onChange={(e) => {
                        setname(e.target.value);
                      }}
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div class="flex justify-center">
                <div class="mx-8 w-full">
                  <label
                    for="age"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Age
                  </label>
                  <div class="mt-2">
                    <input
                      type="number"
                      className="name_i"
                      placeholder="Age"
                      onChange={(e) => {
                        setage(e.target.value);
                      }}
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div class="flex justify-center">
                <div class="mr-2">
                  <label
                    for="gender"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Gender
                  </label>
                  <div class="mt-2">
                    <select
                      id="gender"
                      className="block w-[250px] h-[37px] pl-5 bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6"
                      onChange={(e) => {
                        setgender(e.target.value);
                      }}
                      required
                    >
                      <option value="" disabled selected>
                        Select gender
                      </option>
                      <option value="student">Male</option>
                      <option value="lecturer">Female</option>
                    </select>
                  </div>
                </div>

                <div class="ml-2">
                  <label
                    for="instructor_courses"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Courses
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      className="name_i"
                      placeholder="Courses"
                      onChange={(e) => {
                        setinstructor_course(e.target.value);
                      }}
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={senddata}
                  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create Instructor
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
