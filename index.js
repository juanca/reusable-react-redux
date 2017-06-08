/*
 * Dig into redux store state given a selector path
 * e.g.

store := {
  a0: {
    a1: {
      foo: 'foo',
    },
  },
  b0: {
    b1: {},
  },
};

selector := [a0, a1]

result := { foo: 'foo' }

 *
 */
function scope(store, selectors) {
  return selectors.reduce(function (state, selector) {
    if (Object.prototype.hasOwnProperty.call(state, selector)) {
      return state[selector];
    }

    throw new Error(`Unable to scope store state: ${selector} from ${selectors.join(',')}`);
  }, store);
}


/*
 * Helper method: return a new state with a specific (deeply nested) state slice modified.
 */
function setNestedState(state, selectors, nextLocalState) {
  // In order to set a new deeply nested state
  // Recursively create new state objects along the selectors path
  return Object.assign({}, state, {
    [selectors[0]]: selectors.length === 1 ?
      nextLocalState :
      setNestedState(state[selectors[0]], selectors.slice(1), nextLocalState),
  });
}

/*
 * Higher-order reducer
 * Pass a specific (deeply nested) state slice into a reducer.
 * State slice is determined by the `meta.selectors` action payload.
 * Modified state slice is set back into overall store state (without mutation).
 */
export function scopeReducer(reducer) {
  return function scopedReducer(state, action) {
    if (!action.meta || !action.meta.selectors) {
      return state;
    }

    // Get local state for connected component
    const scopedState = scope(state, action.meta.selectors);

    // Get new local state for connected component
    const nextScopedState = reducer(scopedState, action);

    // Do nothing if state didn't change for connected component
    if (scopedState === nextScopedState) {
      return state;
    }

    // Set new local state on store state
    return setNestedState(state, action.meta.selectors, nextScopedState);
  };
}

module.exports = {
  scope: scope,
  scopeReducer: scopeReducer,
};
