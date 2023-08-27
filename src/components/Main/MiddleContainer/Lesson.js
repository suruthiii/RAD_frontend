import React from "react";
import { Progress } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Lesson = ({ lesson, progress, instructor, link, color }) => {
  return (
    <>
      <Link
        to={link}
        class="flex justify-between mt-3 border-b px-3 pt-2 pb-3 hover:shadow-md hover:rounded-lg duration-200"
      >
        <div class="flex items-center w-[35%]">
          <div
            class="h-[50px] w-[50px] rounded-md"
            style={{ backgroundColor: color }}
          ></div>
          <div class="text-sm ml-5 w-[60%]">{lesson}</div>
        </div>
        <Progress
          size="sm"
          value={progress}
          maxValue={100}
          color="primary"
          showValueLabel={true}
          className="w-[20%]"
        />
        <div class="w-[25%] ml-10 flex items-center text-[#0505057c] text-sm">
          {instructor}
        </div>
        <div class="w-[5%] flex items-start justify-center text-3xl text-[gray] hover:text-[#2a2a2a]">
          ...
        </div>
      </Link>
    </>
  );
};

export default Lesson;
