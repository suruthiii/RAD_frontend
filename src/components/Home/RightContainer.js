import React from "react";

import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";

import { Link } from "react-router-dom";
import TaskSection from "./RightContainer/TaskSection";

const RightContainer = () => {
  let defaultDate = today(getLocalTimeZone());
  let [value, setValue] = React.useState(defaultDate);

  return (
    <>
      <div>
        <Calendar
          aria-label="Date (Presets)"
          classNames={{
            content: "w-full",
          }}
          focusedValue={value}
          value={value}
          onChange={setValue}
          onFocusChange={setValue}
          showMonthAndYearPickers
          calendarWidth="100%"
        />
      </div>
      <div class="">
        <div class="flex justify-between">
          <h1 className="pt-3 text-xl">Tasks</h1>
          <Link
            class="text-xs text-[#00000047] translate-y-6 hover:text-[#00000079] duration-150"
            to="/View_Assignments"
          >
            View All
          </Link>
        </div>
        <TaskSection />
      </div>
    </>
  );
};

export default RightContainer;
