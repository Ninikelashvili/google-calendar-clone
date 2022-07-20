import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../context/GlobalContext";
import Svg from "../media/svg";

function CreateEventButton() {
  const { setShowEventModel } = useContext(GlobalContext);
  return (
    <CreateEvent onClick={() => setShowEventModel(true)}>
      <Svg />
      <span>Create</span>
    </CreateEvent>
  );
}

const CreateEvent = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border: none;
  outline: none;
  border-radius: 50px;
  background: transparent;
  box-shadow: 0 1px 3px #b1b1b1;
  transition: all 0.2s ease-in;
  :hover {
    box-shadow: 0 1px 10px #a7a7a7;
  }
  cursor: pointer;
  span {
    margin: 0 20px;
    font-family: system-ui;
    color: #303030;
    font-weight: 400;
    font-size: 14px;
  }
`;

export default CreateEventButton;
