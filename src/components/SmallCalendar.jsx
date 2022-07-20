import dayjs from "dayjs";
import { useEffect, useState, useContext } from "react";
import { getMonth } from "../util";
import GlobalContext from "../context/GlobalContext";
import React from "react";
import styled from "styled-components";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIndx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const { monthIndex, setSmallCalendarMonth, setDaySelected, daySelected } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIndx(monthIndex);
  }, [monthIndex]);

  const hanlderPrevMonth = () => {
    setCurrentMonthIndx(currentMonthIdx - 1);
  };
  const hanlderNextMonth = () => {
    setCurrentMonthIndx(currentMonthIdx + 1);
  };
  const getCurrentDayClass = (day) => {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currentDay = day.format(format);
    const selectedDay = daySelected && daySelected.format(format);

    if (nowDay === currentDay) {
      return "smallCalendarCurrentDay";
    } else if (currentDay === selectedDay) {
      return "selected-day";
    } else {
      return "";
    }
  };
  return (
    <SmallCalendarContainer>
      <header>
        <p>
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>
        <div>
          <button onClick={hanlderPrevMonth}>
            <span>
              <FiChevronLeft />
            </span>
          </button>
          <button onClick={hanlderNextMonth}>
            <span>
              <FiChevronRight />
            </span>
          </button>
        </div>
      </header>
      <SmallCal>
        <SmallCalDiv>
          {currentMonth[0].map((day, index) => (
            <span key={index}>{day.format("dd").charAt(0)}</span>
          ))}
        </SmallCalDiv>
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            <Calendar>
              {row.map((day, index) => (
                <button
                  onClick={() => {
                    setSmallCalendarMonth(currentMonthIdx);
                    setDaySelected(day);
                  }}
                  key={index}
                  className={` ${getCurrentDayClass(day)}`}
                >
                  <span>{day.format("D")}</span>
                </button>
              ))}
            </Calendar>
          </React.Fragment>
        ))}
      </SmallCal>
    </SmallCalendarContainer>
  );
}

const SmallCalendarContainer = styled.div`
  padding: 20px 0;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 5px 0 0 5px;
    div {
      button {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 20px;
        margin: 0 3px;
        color: #5e5e5e;
      }
    }
    p {
      font-family: system-ui;
      font-size: 13px;
    }
  }
`;

const SmallCal = styled.div`
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    span {
      font-family: system-ui;
      font-size: 13px;
      color: #838383;
      font-size: 10px;
      padding: 5px 10px;
      min-width: 15px;
    }
  }
`;

const SmallCalDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  span {
    font-family: system-ui;
    font-size: 13px;
    color: #838383;
  }
`;

const Calendar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 7px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 15px;
    width: 100%;
    span {
      font-size: 10px;
    }
  }
`;
export default SmallCalendar;
