// CalendarComponent.js

import React from "react";

const CalendarComponent = ({ isoDates }) => {
  // Convert ISO dates to JavaScript Date objects
  const dateObjects = isoDates.map((isoDate) => new Date(isoDate));

  // Function to check if a date is in the provided array
  const isDateHighlighted = (date) => dateObjects.some((d) => d.toISOString() === date.toISOString());

  // Function to get the day number with leading zero
  const getDayNumber = (date) => date.getDate().toString().padStart(2, "0");

  // Function to get the month name
  const getMonthName = (date) => {
    const options = { month: "long" };
    return date.toLocaleDateString("en-US", options);
  };

  // Function to get the abbreviated day name
  const getDayName = (date) => {
    const options = { weekday: "short" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="grid grid-cols-6 gap-2">
      {dateObjects.map((date, index) => (
        <div
          key={index}
          className={`p-2 border rounded ${
            isDateHighlighted(date) ? "bg-blue-500 text-white" : ""
          }`}
        >
          <div className="text-sm font-semibold">{getDayName(date)}</div>
          <div>{getDayNumber(date)}</div>
          <div className="text-xs">{getMonthName(date)}</div>
        </div>
      ))}
    </div>
  );
};

export default CalendarComponent;
