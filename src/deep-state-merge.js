/*
 * Utility method
 * Create a new state object with a specific (deeply nested) state slice modified.
 */
module.exports = function deepStateMerge(state, selectors, nextLocalState) {
  if (selectors.length === 0) return nextLocalState;

  // In order to set a new deeply nested state
  // Recursively create new state objects along the selectors path
  return Object.assign({}, state, {
    [selectors[0]]: selectors.length === 1 ?
      nextLocalState :
      deepStateMerge(state[selectors[0]], selectors.slice(1), nextLocalState),
  });
}
