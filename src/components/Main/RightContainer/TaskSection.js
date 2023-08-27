import React from "react";
import TaskItem from "./TaskItem";

const RightContainer = () => {
  return (
    <>
      <TaskItem
        name="DSA Group Assignment"
        description="DSA group assignment"
        link="/"
        color="red"
      />
      <TaskItem
        name="RAD Tutorial 01"
        description="RAD Tutorial 01"
        link="/"
        color="#00ff15"
      />
      <TaskItem
        name="SE In-class Assignment"
        description="SE in-class assignment"
        link="/"
        color="#4800ff"
      />
      <TaskItem
        name="SE In-class Assignment"
        description="SE in-class assignment"
        link="/"
        color="#ddff00"
      />
      <TaskItem
        name="SE In-class Assignment"
        description="SE in-class assignment"
        link="/"
        color="#ff00f7"
      />
    </>
  );
};

export default RightContainer;
