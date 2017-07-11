/*
 * Utility method
 * Dig into redux store state given a selector path
 */
module.exports = function scope(store, selectors) {
  return selectors.reduce(function (state, selector) {
    if (Object.prototype.hasOwnProperty.call(state, selector)) {
      return state[selector];
    }

    throw new Error(`Unable to scope store state: ${selector} from ${selectors.join(',')}`);
  }, store);
}
