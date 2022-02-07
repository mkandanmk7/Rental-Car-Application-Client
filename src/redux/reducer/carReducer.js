const initialState = {
  cars: [],
};

// const { type,payload } = action; destructring obj;

export const carReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "addCar":
      return { ...state, ...payload };
    default:
      return state;
  }
};
