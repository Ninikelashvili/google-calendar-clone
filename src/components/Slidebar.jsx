import React from "react";
import styled from "styled-components";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";

function Slidebar() {
  return (
    <SlidebarContainer>
      <CreateEventButton />
      <SmallCalendar />
    </SlidebarContainer>
  );
}

const SlidebarContainer = styled.div`
  margin-right: 20px;
  max-width: 250px;
  width: 100%;
`;
export default Slidebar;
