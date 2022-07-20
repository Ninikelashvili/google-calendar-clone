import React from "react";
import styled from "styled-components";
import Day from "./Day";

function Month({ month }) {
  return (
    <MonthsContainer>
      {month?.map((row, i) => (
        <React.Fragment key={i}>
          {row?.map((day, index) => (
            <Day day={day} key={index} rowIndex={i} />
          ))}
        </React.Fragment>
      ))}
    </MonthsContainer>
  );
}

const MonthsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  max-width: 1450px;
  width: 100%;
`;

export default Month;
