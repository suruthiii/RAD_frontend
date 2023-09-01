import React, { Fragment, useState } from "react";
import { Calendar as NextUICalendar } from "@nextui-org/react";
import { today, getLocalTimeZone, isWeekend } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import { Link } from "react-router-dom";
import TaskSection from "./RightContainer/TaskSection";

const RightContainer = () => {
  let now = today(getLocalTimeZone());

  let disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })],
  ];

  let { locale } = useLocale();

  let isDateUnavailable = (date) =>
    isWeekend(date, locale) ||
    disabledRanges.some(
      (interval) =>
        date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0
    );

  return (
    <>
      <div>
        <NextUICalendar
          calendarWidth="100%"
          color="warning"
          className="border-none shadow-none bg-white"
          aria-label="Date (Unavailable)"
          isDateUnavailable={isDateUnavailable}
        />
      </div>
      <div class="">
        <div class="flex justify-between">
          <h1 className="pt-3 text-xl">Tasks</h1>
          <Link
            class="text-xs text-[#00000047] translate-y-6 hover:text-[#00000079] duration-150"
            to="/"
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
