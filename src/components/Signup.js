import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header_2 from "./Header_2";

export default function Signup() {
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

  return (
    <div>
      <Header_2 />

      <div class="flex justify-center px-6 py-12 lg:px-8 h-[95vh] items-center">
        <div class="bg-white w-[600px] h-[580px] rounded-xl pt-4 mt-20 border-2" style={{boxShadow: '0 0 10px 0.1px #d6d6d6'}}>
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              class="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create new account
            </h2>
          </div>

          <div class="mt-10 w-full px-10">
            <form class="space-y-6">
              <div class="flex justify-center">
                <div class="mr-2">
                  <label
                    for="fname"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First Name
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      className="name_i"
                      placeholder="first name"
                      onChange={(e) => {
                        setfirst_name(e.target.value);
                      }}
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="ml-2">
                  <label
                    for="lname"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last Name
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      className="name_i"
                      placeholder="last name"
                      onChange={(e) => {
                        setlast_name(e.target.value);
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
                    for="fname"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Role
                  </label>
                  <div class="mt-2">
                    <select
                      id="role"
                      className="block w-[250px] h-[37px] pl-5 bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6"
                      onChange={(e) => {
                        setrole(e.target.value);
                      }}
                      required
                    >
                      <option value="" disabled selected>
                        Select role
                      </option>
                      <option value="student">Student</option>
                      <option value="lecturer">Lecturer</option>
                    </select>
                  </div>
                </div>

                <div class="ml-2">
                  <label
                    for="lname"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      className="name_i"
                      placeholder="User name"
                      onChange={(e) => {
                        setUsername(e.target.value);
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
                    for="fname"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Mobile Number
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      className="name_i"
                      placeholder="Mobile NO"
                      onChange={(e) => {
                        setMobile_NO(e.target.value);
                      }}
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="ml-2">
                  <label
                    for="lname"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Temporary Password
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      className="name_i"
                      placeholder="Temporary_Password"
                      onChange={(e) => {
                        setTemporary_Password(e.target.value);
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
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
