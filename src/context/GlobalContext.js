import React from "react";

const globalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showEventModel: false,
  setShowEventModel: () => {},
  dispatchEvent: ({ type, payload }) => {},
  savedEvent: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
});

export default globalContext;
