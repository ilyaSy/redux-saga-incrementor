export const incrementAsync = () => ({
  type: "INCREMENT_ASYNC"
});

export const incrementByValueAsync = (value: number) => ({
  type: "INCREMENT_BY_VALUE_ASYNC",
  payload: value
});

export const decrementAsync = () => ({
  type: "DECREMENT_ASYNC"
});

export const decrementByValueAsync = (value: number) => ({
  type: "DECREMENT_BY_VALUE_ASYNC",
  payload: value
});

export const operationLoading = () => ({
  type: "OPERATION_LOADING"
});

export const operationSuccess = (value: number) => ({
  type: "OPERATION_SUCCESS",
  payload: value
});

export const cancelOperation = () => ({
  type: "CANCEL_OPERATION"
});
