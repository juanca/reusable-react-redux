const deepStateMerge = require('../src/deep-state-merge.js');

describe('Reusable React Redux DeepStateMerge', function () {
  it('creates a new state with a modified state slice', function () {
    const originalState = { a0: { a1: { foo: 'foo' } } };
    const statePath = ['a0', 'a1'];

    const newState = deepStateMerge(originalState, statePath, { foo: 'foo' })
    expect(newState).not.toBe(originalState);
    expect(newState.a0.a1.foo).toEqual('foo');
  });

  it('creates a new (shallow) state with a modified state slice', function () {
    const originalState = { foo: 'foo' };
    const statePath = [];

    const newState = deepStateMerge(originalState, statePath, { foo: 'foo' })
    expect(newState).not.toBe(originalState);
    expect(newState.foo).toEqual('foo');
  });

  it('does not create a new state with a modified state slice', function () {
    const originalState = { a0: { a1: { foo: 'foo' } } };
    const statePath = ['a0', 'a1'];

    const newState = deepStateMerge(originalState, statePath, originalState.a0.a1)
    expect(newState).toBe(originalState);
  });
});
