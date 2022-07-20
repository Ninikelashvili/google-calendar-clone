import React, { useState, useContext, useEffect } from "react";
import CalendarHeader from "./components/CalendarHeader";
import Slidebar from "./components/Slidebar";
import Month from "./components/Month";
import { getMonth } from "./util";
import GlobalContext from "./context/GlobalContext";
import EventModel from "./components/EventModel";
import styled from "styled-components";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModel } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModel && <EventModel />}
      <>
        <CalendarHeader />
        <CalendarConatiner>
          <Slidebar />
          <Month month={currentMonth} />
        </CalendarConatiner>
      </>
    </React.Fragment>
  );
}

const CalendarConatiner = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  max-width: 1475px;
  width: 100%;
  margin: 0 auto;
`;

export default App;
