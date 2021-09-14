const initialState = {
  value: 0,
  isLoading: false
};

export const reducer = (state = initialState, action: any) => {
  const newState = {...state};
  switch (action.type) {
    case "OPERATION_LOADING":
      newState.isLoading = true;
      return newState;
    case "OPERATION_SUCCESS":
      newState.value = state.value + action.payload;
      newState.isLoading = false;
      return newState;
    default:
      return newState;
  }
};
