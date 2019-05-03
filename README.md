# Java Script Data Structures

[![Build Status](https://travis-ci.com/frangelli/javascript-data-structures.svg?branch=master)](https://travis-ci.com/frangelli/javascript-data-structures)

## Purpose

I've decided to invest some time studying Data Structures and Algorithms and to really understand the underlaying of how some Data Structures works... I've decided to implement them in Javascript ( given that this is the language that I've been using at work ).

This repository will serve as reference for my self but maybe it helps someone else.

## Contributing

### Development Environment

To install the dependences

- `npm install`

To run the tests locally

- `npm run test` or `npm run test:watch` to watch for file changes.

### Commit Messages Pattern

The pattern used for commit messages will be:

`type([DataStructure]): [Message]`

Types:

- feat
- fix

Ex: `feat(Stack): Add algorithm implementation`

## How it's organized

I'll organize the structure like this:

- root
  - [DataStructure-1]
    - [DataStructure-1].js
    - [DataStructure-1].test.js
    - Usage
      - [SomeAlgorithmSolving].js
  - [DataStructure-2]
    - [DataStructure-2].js
    - [DataStructure-2].test.js
    - Usage
      - [SomeAlgorithmSolving].js
