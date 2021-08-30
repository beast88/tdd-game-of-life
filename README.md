# TDD - Game of Life

## Project Overview

### Description

Rebuilding Conway's Game of Life using test driven development Typescript and React.

[Wiki Article](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

## Development

### Technologies

- Typescript

### Tasks

#### Setup

- [x] Initialise a new node project
- [x] Install dev dependencies
  - [x] mocha chai typescript eslint
- [x] Setup tsconfig.json
  - [x] { "compilerOptions": {"target": "es6"} }
- [x] Setup eslint
  - [x] eslint --init
- [x] Setup testing script
  - [x] "tests": "mocha"
- [x] Setup github repository
  - [x] Setup .gitignore

#### Cell Rules

- [] Setup a cell state object with DEAD or ALIVE properties
- [] Setup a cell class
  - [] Live cells with fewer than 2 live neighbors should die
  - [] Live cells with 2 or 3 live neighbors should stay alive
  - [] Live cells with more than 3 live neighbors should die
  - [] Dead cells with exactly 3 live neighbors should come to life

#### Game Rules

- [] Should be initialised with a given state
  - [] An array of an array of cell states
- [] Retrieve a cell by column and row
- [] Get the number of live neighbors for a given cell
- [] Create the next state of the game
