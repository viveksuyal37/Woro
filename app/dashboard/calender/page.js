"use client";

import moment from "moment/moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const page = () => {
  // const myEventsList = [
  //   {
  //     start: moment("2023-11-09T10:00:00").toDate(),
  //     end: moment("2023-11-09T11:00:00").toDate(),
  //     title: "Google meet",
  //   },
  // ];
  return (
    <div className="mt-7 h-[66vh] bg-[rgba(255,255,255,0.5)] rounded-xl p-[6px_10px] ">
      <Calendar
        localizer={localizer}
        // events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        // style={{ height: 500 }}
      />
    </div>
  );
};

export default page;
