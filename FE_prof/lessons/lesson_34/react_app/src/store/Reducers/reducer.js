const TYPE = '';
export const functionName = (payload) => ({ type: TYPE, payload });

export const Reducer = (state, action) => {
  if (action.type === TYPE) {
    return [...state];
  }
  return state;
};
