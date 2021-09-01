# TDD - Game of Life

## Project Overview

### Description

Rebuilding Conway's Game of Life using test driven development Typescript and React.

[Wiki Article](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

## Development

### Technologies

- Typescript
- Mocha - testing suite
- Chai - assertion library

### Tasks

#### Setup

- [x] Initialise a new node project
- [x] Install dev dependencies
  - [x] mocha @types/mocha chai @types/chai typescript ts-node eslint
- [x] Setup tsconfig.json
- [x] Setup eslint
  - [x] eslint --init
- [x] Setup testing script
  - [x] "tests": "mocha -r ts-node/register 'tests/\**/*ts' || true"
- [x] Setup github repository
  - [x] Setup .gitignore

#### Cell Rules

- [x] Setup a cell state object with DEAD or ALIVE properties
- [x] Setup a cell class
- [x] Cell should be initialised with a cellState
  - [x] Live cells with fewer than 2 live neighbors should die
    - [x] getNextState(numberOfNeighbors)
  - [x] Live cells with 2 or 3 live neighbors should stay alive
  - [x] Live cells with more than 3 live neighbors should die
  - [x] Dead cells with exactly 3 live neighbors should come to life

#### Game Rules

- [x] Should be initialised with a given state
  - [x] An array of an array of cells
- [x] Retrieve a cell by column and row
- [x] Get the number of live neighbors for a given cell
- [x] Create the next state of the game

#### Visuals

- [] Create a new react app including typescript
