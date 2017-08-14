const deepStateMerge = require('./src/deep-state-merge.js');
const scope = require('./src/scope.js');
const scopeReducer = require('./src/scope-reducer.js');
const stateMerge = require('./src/state-merge.js');

module.exports = {
  deepStateMerge: deepStateMerge,
  scope: scope,
  scopeReducer: scopeReducer,
  stateMerge: stateMerge,
};
