/*
 * Utility method
 * Dig into redux store state given a state path
 */
module.exports = function scope(store, statePath) {
  return statePath.reduce(function (state, stateKey) {
    if (state.hasOwnProperty(stateKey)) {
      return state[stateKey];
    }

    throw new Error(`Unable to scope store state: ${stateKey} from ${statePath.join(',')}`);
  }, store);
}
