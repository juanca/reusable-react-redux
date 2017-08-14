const deepStateMerge = require('../src/deep-state-merge.js');
const scope = require('../src/scope.js');
const scopeReducer = require('../src/scope-reducer.js');
const stateMerge = require('../src/state-merge.js');
const lib = require('../index.js');

describe('Reusable React Redux', function () {
  it('exports deepStateMerge', function () {
    expect(lib.deepStateMerge).toBe(deepStateMerge);
  });

  it('exports scope', function () {
    expect(lib.scope).toBe(scope);
  });

  it('exports scopeReducer', function () {
    expect(lib.scopeReducer).toBe(scopeReducer);
  });

  it('exports stateMerge', function () {
    expect(lib.stateMerge).toBe(stateMerge);
  });
});
