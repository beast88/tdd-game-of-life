import { expect } from 'chai';
import { cellState } from '../game-of-life/src/Cells/CellState';

describe('CellState', () => {
  it('Should have an ALIVE state', () => {
    expect(cellState.ALIVE).to.equal(1);
  });

  it('Should have a DEAD state', () => {
    expect(cellState.DEAD).to.equal(0);
  });
});
