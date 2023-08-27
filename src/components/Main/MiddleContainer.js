import React from "react";
import { Progress } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Lesson from "./MiddleContainer/Lesson";

const Home = () => {
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
        <Lesson
          lesson="Data Structures and Alorithm III"
          progress={20}
          instructor="Dr. Thilini"
          link="/"
          color="#1e00ff"
        />

        <Lesson
          lesson="Software Engineering III"
          progress={50}
          instructor="Dr. Thilina Haloluwa"
          link="/"
          color="#00ff3c"
        />

        <Lesson
          lesson="Functional Programming"
          progress={70}
          instructor="Dr. Kasun De Soyza"
          link="/"
          color="#ff0000"
        />

        <Lesson
          lesson="Machine Learning and Neural Computing"
          progress={40}
          instructor="Dr. Kasun Gunawardhane"
          link="/"
          color="#d9ff00"
        />

        <Lesson
          lesson="Rapid Application Development"
          progress={20}
          instructor="Mr. Kavinda"
          link="/"
          color="#ff00d9"
        />
      </div>
    </>
  );
};

export default Home;
