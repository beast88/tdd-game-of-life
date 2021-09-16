import { expect } from 'chai';
import { cellState } from '../game-of-life/src/Cells/CellState';
import { Cell } from '../game-of-life/src/Cells/Cell';
import Game from '../game-of-life/src/Game/Game';

const state1 = [
  [
    new Cell(cellState.DEAD),
    new Cell(cellState.DEAD),
    new Cell(cellState.DEAD),
  ],
  [
    new Cell(cellState.DEAD),
    new Cell(cellState.DEAD),
    new Cell(cellState.DEAD),
  ],
  [
    new Cell(cellState.DEAD),
    new Cell(cellState.DEAD),
    new Cell(cellState.DEAD),
  ],
];

const state2 = [
  [
    new Cell(cellState.ALIVE),
    new Cell(cellState.ALIVE),
    new Cell(cellState.DEAD),
    new Cell(cellState.DEAD),
  ],
  [
    new Cell(cellState.DEAD),
    new Cell(cellState.ALIVE),
    new Cell(cellState.DEAD),
    new Cell(cellState.DEAD),
  ],
  [
    new Cell(cellState.ALIVE),
    new Cell(cellState.ALIVE),
    new Cell(cellState.ALIVE),
    new Cell(cellState.ALIVE),
  ],
  [
    new Cell(cellState.DEAD),
    new Cell(cellState.DEAD),
    new Cell(cellState.DEAD),
    new Cell(cellState.ALIVE),
  ],
];

describe('Game of Life', () => {
  it('Should be initialised with a given state', () => {
    const game = new Game(state1);

    const expectedResult = [
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
    ];

    expect(game.state).to.deep.equal(expectedResult);

    const newGame = new Game(state2);

    const newExpectedResult = [
      [
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.ALIVE),
      ],
    ];

    expect(newGame.state).to.deep.equal(newExpectedResult);
  });

  it('Should return the number of live neighbors above a given cell', () => {
    const gameState = [
      [
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
    ];
    const game = new Game(gameState);
    const numNeighbors = game.getLiveNeighbors(1, 1);
    expect(numNeighbors).to.equal(3);
  });

  it('Should return the number of live neighbors below a given cell', () => {
    const gameState = [
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
      ],
    ];
    const game = new Game(gameState);
    const numNeighbors = game.getLiveNeighbors(1, 1);
    expect(numNeighbors).to.equal(3);
  });

  it('Should return the number of live neighbors to the left of a given cell', () => {
    const gameState = [
      [
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
    ];
    const game = new Game(gameState);
    const numNeighbors = game.getLiveNeighbors(1, 1);
    expect(numNeighbors).to.equal(3);
  });

  it('Should return the number of live neighbors to the right of a given cell', () => {
    const gameState = [
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.ALIVE),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.ALIVE),
      ],
    ];
    const game = new Game(gameState);
    const numNeighbors = game.getLiveNeighbors(1, 1);
    expect(numNeighbors).to.equal(3);
  });

  it('Should return the number of live neighbors for a cell in the first row', () => {
    const gameState = [
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
    ];
    const game = new Game(gameState);
    const numNeighbors = game.getLiveNeighbors(0, 1);

    expect(numNeighbors).to.equal(1);
  });

  it('Should return the number of live neighbors for a cell in the bottom row', () => {
    const gameState = [
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.ALIVE),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
      ],
    ];
    const game = new Game(gameState);
    const numNeighbors = game.getLiveNeighbors(2, 1);

    expect(numNeighbors).to.equal(2);
  });

  it('Should return the number of live neighbors for a cell in the left most column', () => {
    const gameState = [
      [
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
    ];

    const game = new Game(gameState);
    const numNeighbors = game.getLiveNeighbors(0, 0);

    expect(numNeighbors).to.equal(2);
  });

  it('Should return the number of live neighbors for a cell in the right most column', () => {
    const gameState = [
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
    ];
    const game = new Game(gameState);
    const numNeighbors = game.getLiveNeighbors(1, 2);

    expect(numNeighbors).to.equal(1);
  });

  it('Should return the number of live neighbors on a larger grid', () => {
    const gameState = [
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
      ],
      [
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
    ];

    const game = new Game(gameState);
    const numNeighbors = game.getLiveNeighbors(1, 1);

    expect(numNeighbors).to.equal(4);
  });

  it('Should create the next state of the game (Block)', () => {
    const gameState = [
      [
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
    ];

    const game = new Game(gameState);

    const expectedResult = [
      [
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
    ];

    expect(game.nextState()).to.deep.equal(expectedResult);
  });

  it('Should create the next state of the game (Blinker)', () => {
    const gameState = [
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
    ];

    const game = new Game(gameState);

    const expectedResult = [
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.ALIVE),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
      [
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
        new Cell(cellState.DEAD),
      ],
    ];

    expect(game.nextState()).to.deep.equal(expectedResult);
  });
});
