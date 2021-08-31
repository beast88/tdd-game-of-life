import { expect } from 'chai';
import { cellState } from '../Cells/CellState';
import { Cell } from '../Cells/Cell';

describe('Cell', () => {
  it('Should initialise with a cellState', () => {
    const liveCell = new Cell(cellState.ALIVE);
    expect(liveCell.state).to.equal(cellState.ALIVE);

    const deadCell = new Cell(cellState.DEAD);
    expect(deadCell.state).to.equal(cellState.DEAD);
  });

  it('Should die if number of neighbors is fewer than 2', () => {
    const liveCell = new Cell(cellState.ALIVE);

    const liveCellWith0Neighbors = liveCell.getNextState(0);
    expect(liveCellWith0Neighbors).to.equal(cellState.DEAD);

    const liveCellWith1Neighbor = liveCell.getNextState(1);
    expect(liveCellWith1Neighbor).to.equal(cellState.DEAD);
  });

  it('Should stay dead if number of neighbors is fewer than 2', () => {
    const deadCell = new Cell(cellState.ALIVE);

    const deadCellWith0Neighbors = deadCell.getNextState(0);
    expect(deadCellWith0Neighbors).to.equal(cellState.DEAD);

    const deadCellWith1Neighbor = deadCell.getNextState(1);
    expect(deadCellWith1Neighbor).to.equal(cellState.DEAD);
  });

  it('Should stay alive if number of neighbors is 2 or 3', () => {
    const liveCell = new Cell(cellState.ALIVE);

    const liveCellWith2Neighbors = liveCell.getNextState(2);
    expect(liveCellWith2Neighbors).to.equal(cellState.ALIVE);

    const liveCellWith3Neighbors = liveCell.getNextState(3);
    expect(liveCellWith3Neighbors).to.equal(cellState.ALIVE);
  });

  it('Should stay dead if number of neighbors is 2', () => {
    const deadCell = new Cell(cellState.DEAD);

    const deadCellWith2Neighbors = deadCell.getNextState(2);
    expect(deadCellWith2Neighbors).to.equal(cellState.DEAD);
  });

  it('Should die if number of neighbors is more than 3', () => {
    const liveCell = new Cell(cellState.ALIVE);

    const liveCellWith4Neighbors = liveCell.getNextState(4);
    expect(liveCellWith4Neighbors).to.equal(cellState.DEAD);

    const liveCellWith5Neighbors = liveCell.getNextState(5);
    expect(liveCellWith5Neighbors).to.equal(cellState.DEAD);
  });

  it('Should stay dead if number of neighbors is more than 3', () => {
    const deadCell = new Cell(cellState.DEAD);

    const deadCellWith4Neighbors = deadCell.getNextState(4);
    expect(deadCellWith4Neighbors).to.equal(cellState.DEAD);

    const deadCellWith5Neighbors = deadCell.getNextState(5);
    expect(deadCellWith5Neighbors).to.equal(cellState.DEAD);
  });

  it('Should come to life with exactly 3 neighbors', () => {
    const deadCell = new Cell(cellState.DEAD);

    const deadCellWith3Neighbors = deadCell.getNextState(3);
    expect(deadCellWith3Neighbors).to.equal(cellState.ALIVE);
  });
});
