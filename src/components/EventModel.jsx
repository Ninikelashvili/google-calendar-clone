import React, { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../context/GlobalContext";
import { AiOutlineClose } from "react-icons/ai";
import { MdSchedule, MdSegment } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { TbMenu } from "react-icons/tb";

const lablesClasses = ["blue", "red", "green", "purple", "grey"];

function EventModel() {
  const { setShowEventModel, daySelected, dispatchEvent, selectedEvent } =
    useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLable, setSelectedLable] = useState(
    selectedEvent
      ? lablesClasses.find((label) => label === selectedEvent.label)
      : lablesClasses[0]
  );

  const handleSave = (e) => {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLable,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    console.log(selectedEvent);
    if (selectedEvent) {
      dispatchEvent({ type: "UPDATE", payload: calendarEvent });
    } else {
      dispatchEvent({ type: "ADD", payload: calendarEvent });
    }
    setShowEventModel(false);
  };
  return (
    <ModelDiv>
      <form onSubmit={handleSave}>
        <header>
          <span>
            <TbMenu />
          </span>
          <div>
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchEvent({ type: "DELETE", payload: selectedEvent });
                  setShowEventModel(false);
                }}
              >
                <FiTrash />
              </span>
            )}
            <button onClick={() => setShowEventModel(false)}>
              <span>
                <AiOutlineClose />
              </span>
            </button>
          </div>
        </header>
        <ModelContent>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Add Title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <Schedule>
              <span>
                <MdSchedule />
              </span>
              <p>{daySelected.format("dddd, MMMM, DD")}</p>
            </Schedule>
            <Schedule>
              <span>
                <MdSegment />
              </span>
              <input
                type="text"
                name="description"
                placeholder="Add Description"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
              />
            </Schedule>
            <Schedule>
              <span>
                <BsBookmark />
              </span>
              <p>
                {lablesClasses.map((item, i) => {
                  return (
                    <Lables
                      onClick={() => setSelectedLable(item)}
                      key={i}
                      style={{ background: lablesClasses[i] }}
                    >
                      {selectedLable === item && <AiOutlineCheck />}
                    </Lables>
                  );
                })}
              </p>
            </Schedule>
          </div>
        </ModelContent>
        <FooterEl>
          <button type="submit">Save</button>
        </FooterEl>
      </form>
    </ModelDiv>
  );
}
const Lables = styled.span`
  height: 30px;
  width: 30px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: #fff;
    font-size: 17px;
  }
`;

const ModelDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 700px;
  background: #fff;
  box-shadow: 0 0 45px #c8c8c8;
  border-radius: 20px;
  z-index: 20;
  form {
    header {
      width: 100%;
      display: flex;
      padding: 5px 10px;
      margin: 0.5px;
      justify-content: space-between;
      align-items: center;
      background: #f0f0f0;
      border-radius: 20px 20px 0 0;
      div {
        display: flex;
        align-items: center;
        svg {
          font-size: 15px;
          margin: 0 5px;
          color: grey;
          cursor: pointer;
        }
      }
      button {
        background: transparent;
        border: none;
        outline: none;
        font-size: 20px;
        padding: 5px;
      }
      span {
        background: transparent;
        border: none;
        outline: none;
      }
    }
  }
`;

const ModelContent = styled.div`
  padding: 10px;
  input {
    width: 80%;
    border: none;
    outline: none;
    border-bottom: solid 0.5px #e1e1e1;
    font-family: system-ui;
    font-size: 20px;
    letter-spacing: 0.5px;
    margin: 0 50px 10px 50px;
    padding: 10px;
  }
`;

const Schedule = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 10px 0;
  span {
    margin-right: 35px;
    font-size: 25px;
    color: #c9c9c9;
  }
  p {
    font-family: system-ui;
    color: #353535;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
  }
  input {
    width: 80%;
    margin: 0;
    padding: 0;
    padding-bottom: 10px;
    border: none;
    outline: none;
    border-bottom: solid 0.5px #e1e1e1;
    font-family: system-ui;
    font-size: 15px;
    letter-spacing: 0.5px;
  }
`;

const FooterEl = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px 30px;
  button {
    border: none;
    padding: 10px 20px;
    color: #fff;
    background-color: rgb(48, 99, 252);
    font-family: system-ui;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.2s ease-in;
    :hover {
      background-color: rgb(32, 75, 204);
    }
  }
`;
export default EventModel;
