import React, { Fragment, useState } from "react";
import axios from "axios";
import "../../../components/add_style.css";
import Header_submition from "../../../components/Header_submition";

const AddSubmition = () => {
  const [name, setname] = useState("");
  const [aname, setaname] = useState("");
  const [link, setlink] = useState("");
  const [date, setdate] = useState("");

  function senddata(e) {
    e.preventDefault();

    const newsubmition = {
      name,
      aname,
      link,
      date,
    };

    axios
      .post("http://localhost:8070/submition/add_submition", newsubmition)
      .then(() => {
        alert("submition add");
        setname("");
        setaname("");
        setlink("");
        setdate("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <Header_submition />
      <div className="container">
        <div className="text">submition Adding Form</div>
        <form action="#">
          <div className="form-row">
            <div className="input-data">
              <div className="underline"></div>
              <label className="submition name"></label>
              <input
                type="text"
                className="name_i"
                placeholder="name"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
            <div className="input-data">
              <div className="underline"></div>
              <label className="aname"></label>
              <input
                type="text"
                placeholder="submition name"
                onChange={(e) => {
                  setaname(e.target.value);
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
                placeholder="link"
                onChange={(e) => {
                  setlink(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <div className="underline"></div>
              <label className="submition"></label>
              <input
                type="date"
                placeholder="date"
                onChange={(e) => {
                  setdate(e.target.value);
                }}
              />
            </div>
          </div>
          <button className="button" onClick={senddata}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSubmition;
