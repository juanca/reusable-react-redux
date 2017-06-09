const scopeReducer = require('../src/scope-reducer.js');

describe('Reusable React Redux ScopeReducer', function () {
  it('is a higher-order reducer', function () {
    const scopedReducer = scopeReducer(function () {});
    expect(scopedReducer).toEqual(jasmine.any(Function));
    expect(scopedReducer.length).toEqual(2);
  });

  it('scopes the state to the action.meta.selectors path', function () {
    const store = { a0: { a1: { foo: 'foo' } } };
    const reducerSpy = jasmine.createSpy('reducer');
    const scopedReducer = scopeReducer(reducerSpy);
    const action = { meta: { selectors: ['a0', 'a1'] } };

    scopedReducer(store, action);
    expect(reducerSpy).toHaveBeenCalledWith(store.a0.a1, action);
  });

  it('returns the same state if the reducer returns the same state', function () {
    const store = { a0: { a1: { foo: 'foo' } } };
    const reducerSpy = jasmine.createSpy('reducer').and.returnValue(store.a0.a1);
    const scopedReducer = scopeReducer(reducerSpy, { meta: { selectors: ['a0', 'a1'] } });

    expect(scopedReducer(store, ['a0', 'a1'])).toBe(store);
  });

  it('returns a new state if the reducer returns a new state', function () {
    const store = { a0: { a1: { foo: 'foo' } } };
    const reducerSpy = jasmine.createSpy('reducer').and.returnValue({ foo: 'foo' });
    const scopedReducer = scopeReducer(reducerSpy, { meta: { selectors: ['a0', 'a1'] } });
    const action = { meta: { selectors: ['a0', 'a1'] } };

    const newState = scopedReducer(store, action)
    expect(newState).not.toBe(store);
    expect(newState.a0.a1.foo).toEqual('foo');
  });
});
