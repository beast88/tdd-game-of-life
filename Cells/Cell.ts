import { cellState } from '../Cells/CellState';

class Cell {
  state: number;

  constructor(state: number) {
    this.state = state;
  }

  getNextState(neighbors: number): number {
    if (this.state === cellState.ALIVE) {
      if (neighbors === 2 || neighbors === 3) {
        return this.state;
      }
      return cellState.DEAD;
    } else if (this.state === cellState.DEAD) {
      if (neighbors === 3) {
        return cellState.ALIVE;
      }
      return this.state;
    }
  }
}

export default Cell;