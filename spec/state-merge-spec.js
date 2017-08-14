const stateMerge = require('../src/state-merge.js');

describe('Reusable React Redux StateMerge', function () {
  it('creates a new state with a modified state slice', function () {
    const originalState = { foo: 'foo' };
    const stateKey = 'foo';

    const newState = stateMerge(originalState, stateKey, 'bar');
    expect(newState).not.toBe(originalState);
    expect(newState.foo).toEqual('bar');
  });

  it('does not create a new state with a modified state slice', function () {
    const originalState = { foo: 'foo' };
    const stateKey = 'foo';

    const newState = stateMerge(originalState, stateKey, 'foo');
    expect(newState).toBe(originalState);
  });
});
