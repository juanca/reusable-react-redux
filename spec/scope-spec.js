const scope = require('../src/scope.js');

const store = {
  a0: {
    a1: {
      foo: 'foo',
    },
  },
};

describe('Reusable React Redux Scope', function () {
  it('returns the store state given an empty state path', function () {
    expect(scope(store, [])).toBe(store);
  });

  it('digs into the store state given a state path', function () {
    expect(scope(store, ['a0', 'a1'])).toBe(store.a0.a1);
  });

  it('throws if the store state does not have the given state path', function () {
    expect(function () {
      scope(store, ['b0', 'b1']);
    }).toThrowError('Unable to scope store state: b0 from b0,b1');
  });
});
