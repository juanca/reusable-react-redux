# Reusable React Redux

Library to facilitate building reusable react redux components.

[![Travis](https://img.shields.io/travis/juanca/reusable-react-redux.svg)]()
[![npm](https://img.shields.io/npm/dm/reusable-react-redux.svg.svg)]()

## Why?

1. We can do better than specifying yet-another-reducer when reusing an existing connected component.
1. We can do better than re-implementing an existing connected component in order to use a different slice of the store.


# How?

1. Higher-order reducer to programmatically choose store slice.
1. Specify store slice selector as property to connected component.
