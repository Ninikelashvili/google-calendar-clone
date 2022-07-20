import { useContext } from "react";
import logo from "../media/calendar-logo.png";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";
import styled from "styled-components";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  const handlerReset = () => {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  };
  return (
    <MainHeader>
      <img src={logo} alt="calendar-logo" />
      <h1>Calendar</h1>
      <TodayBtn onClick={handlerReset}>Today</TodayBtn>

      <NavigationBtn onClick={handlePrevMonth}>
        <span>
          <FiChevronLeft />
        </span>
      </NavigationBtn>
      <NavigationBtn onClick={handleNextMonth}>
        <span>
          <FiChevronRight />
        </span>
      </NavigationBtn>
      <h2>{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</h2>
    </MainHeader>
  );
}

const NavigationBtn = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  margin: 5px 5px 0 5px;
  color: #585858;
`;

const TodayBtn = styled.button`
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  margin: 0 20px 0 40px;
  padding: 8px 12px;
  font-family: system-ui;
  font-weight: 400;
  background: transparent;
  outline: none;
  font-size: 15px;
  cursor: pointer;
`;

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f4f4f4;
  padding: 12px 10px;
  margin-bottom: 15px;
  img {
    height: 40px;
  }
  h1 {
    font-size: 22px;
    font-family: system-ui;
    font-weight: 300;
    color: #585858;
    margin: 0 10px;
  }
  h2 {
    font-size: 22px;
    font-family: system-ui;
    font-weight: 300;
    color: #585858;
    margin-left: 20px;
  }
`;

export default CalendarHeader;
