# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @alisav_7/lotide`

**Require it:**

`const _ = require('@alisav_7/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(actual, expected)`: Logs equal/not equal arrays
- `assertEqual(actual, expected)`: Logs if parameters passed in are equal
- `assertObjectsEqual(actual, expected)`: Logs equal/not equal objects
- `countLetters(string)`: Returns number of letters in a string
- `countOnly(allItems, itemsToCount)`: Counts number of items in an array
- `eqArrays(arrOne, arrTwo)`: Returns true/false if arrays are equal/not equal
- `eqObjects(object1, object2)`: Returns true/false if objects are equal/not equal
- `findKey(object, callback)`: Finds the key of an object that satisfies the callback condition
- `findKeyByValue(object, value)`: Finds object key, given the value
- `head(actual, expected)`: Returns the head of the array
- `letterPositions(sentence)`: Returns index of a letter in a string
- `map(array, callback)`: Performs a function on each array element
- `middle(arr)`: Takes middle of array
- `tail(actual, expected)`: Returns the tail of the array
- `takeUntil(array, callback)`: Return data until a callback condition is satisfied
