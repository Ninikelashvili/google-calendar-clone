import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import GlobalContext from "../context/GlobalContext";

function Day({ day, rowIndex }) {
  const [dayEvents, setDayEvents] = useState([]);

  const { setDaySelected, setShowEventModel, savedEvent, setSelectedEvent } =
    useContext(GlobalContext);

  useEffect(() => {
    const events = savedEvent.filter(
      (e) => dayjs(e.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [savedEvent, day]);

  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "currentDayClass"
      : "";
  };
  return (
    <OneDay>
      <header>
        {rowIndex === 0 && <p>{day.format("ddd").toUpperCase()}</p>}
        <p className={`${getCurrentDayClass()}`}>{day.format("DD")}</p>
      </header>
      <ShowEventModel
        className="test"
        onClick={() => {
          setDaySelected(day);
          setShowEventModel(true);
        }}
      >
        {dayEvents.map((e, i) => {
          return (
            <EventOnCalendar
              style={{ background: e.label }}
              key={i}
              onClick={() => setSelectedEvent(e)}
            >
              {e.title}
            </EventOnCalendar>
          );
        })}
      </ShowEventModel>
    </OneDay>
  );
}

const EventOnCalendar = styled.div`
  margin: 20px 10px;
  padding: 5px 7px;
  font-family: system-ui;
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
`;

const OneDay = styled.div`
  padding: 81px 5px 5px 80px;
  position: relative;
  font-size: 15px;
  min-width: 165px;
  border-right: solid 0.5px #dfdfdf;
  border-bottom: solid 0.5px #dfdfdf;
  z-index: 15;
  :nth-last-child(-n + 7) {
    border-bottom: none;
    padding-bottom: 30px;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: system-ui;
    p {
      font-size: 13px;
      margin-bottom: 10px;
    }
  }
`;
const ShowEventModel = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 40;
`;
export default Day;
