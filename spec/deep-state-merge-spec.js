const deepStateMerge = require('../src/deep-state-merge.js');

describe('Reusable React Redux DeepStateMerge', function () {
  it('creates a new state with a modified state slice', function () {
    const originalState = { a0: { a1: { foo: 'foo' } } };
    const selectors = ['a0', 'a1'];

    const newState = deepStateMerge(originalState, selectors, { foo: 'foo' })
    expect(newState).not.toBe(originalState);
    expect(newState.a0.a1.foo).toEqual('foo');
  });
});
