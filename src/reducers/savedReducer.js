export const initialEvents = () => {
  const storagedEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storagedEvents ? JSON.parse(storagedEvents) : [];
  return parsedEvents;
};

export const savedEventsReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD":
      return [...state, payload];

    case "UPDATE":
      return state.map((e) => (e.id === payload.id ? payload : e));

    case "DELETE":
      return state.filter((e) => e.id !== payload.id);

    default:
      throw new Error();
  }
};
