const deepStateMerge = require('./deep-state-merge.js');
const scope = require('./scope.js');


/*
 * Higher-order reducer
 * Pass a specific (deeply nested) state slice into a reducer.
 * State slice is determined by the `meta.statePath` action payload.
 * Modified state slice is set back into overall store state (without mutation).
 */
module.exports =  function scopeReducer(reducer) {
  return function scopedReducer(state, action) {
    if (!action.meta || !action.meta.statePath) {
      return state;
    }

    // Get local state for connected component
    const scopedState = scope(state, action.meta.statePath);

    // Get new local state for connected component
    const nextScopedState = reducer(scopedState, action);

    // Do nothing if state didn't change for connected component
    if (scopedState === nextScopedState) {
      return state;
    }

    // Set new local state on store state
    return deepStateMerge(state, action.meta.statePath, nextScopedState);
  };
}
