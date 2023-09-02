import React from "react";
import { Link } from "react-router-dom";

const TaskItem = ({ name, description, link, color }) => {
  return (
    <Link
      to={link}
      className="flex justify-start mt-3 border-b px-3 pt-2 pb-3 hover:shadow-md hover:rounded-lg duration-200"
    >
      <div className="h-[50px] w-[50px] rounded-md" style={{ backgroundColor: color }}></div>
      <div className="ml-5 flex-col flex justify-center">
        <div>{name}</div>
        <div className="text-[#00000058] text-xs">{description}</div>
      </div>
    </Link>
  );
};

export default TaskItem;
