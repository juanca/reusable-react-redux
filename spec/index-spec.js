const scope = require('../src/scope.js');
const scopeReducer = require('../src/scope-reducer.js');
const lib = require('../index.js');

describe('Reusable React Redux', function () {
  it('exports scope', function () {
    expect(lib.scope).toBe(scope);
  });

  it('exports scopeReducer', function () {
    expect(lib.scopeReducer).toBe(scopeReducer);
  });
});
