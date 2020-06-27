export const combineReducers = (...reducers) => (state, { type, ...rest }) => {
  return reducers.reduce((acc, curr) => curr(acc, { type, ...rest }), state)
}