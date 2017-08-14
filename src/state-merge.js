/*
 * Utility method
 * Conditionally create a new state object with a specific state slice modified.
 */
module.exports = function stateMerge(state, stateKey, nextStateValue) {
  return state[stateKey] === nextStateValue ? state : Object.assign({}, state, { [stateKey]: nextStateValue });
}
