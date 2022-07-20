import dayjs from "dayjs";
import React, { useEffect, useState, useReducer } from "react";
import GlobalContext from "./GlobalContext";
import { initialEvents, savedEventsReducer } from "../reducers/savedReducer";

function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModel, setShowEventModel] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [savedEvent, dispatchEvent] = useReducer(
    savedEventsReducer,
    [],
    initialEvents
  );

  useEffect(() => {
    localStorage.setItem("saveEvents", JSON.stringify(savedEvent));
  }, [savedEvent]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  useEffect(() => {
    if (!showEventModel) {
      setSelectedEvent(null);
    }
  }, [showEventModel]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModel,
        setShowEventModel,
        dispatchEvent,
        savedEvent,
        setSelectedEvent,
        selectedEvent,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default ContextWrapper;
