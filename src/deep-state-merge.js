/*
 * Utility method
 * Create a new state object with a specific (deeply nested) state slice modified.
 */
module.exports = function deepStateMerge(state, statePath, nextLocalState) {
  if (statePath.length === 0) return nextLocalState;

  // In order to set a new deeply nested state
  // Recursively create new state objects along the statePath path
  return Object.assign({}, state, {
    [statePath[0]]: statePath.length === 1 ?
      nextLocalState :
      deepStateMerge(state[statePath[0]], statePath.slice(1), nextLocalState),
  });
}
