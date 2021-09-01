import { cellState } from '../Cells/CellState';

export interface CellInterface {
  state: number;
  getNextState(neighbors: number): number;
}

export class Cell implements CellInterface {
  state: number;

  constructor(state: number) {
    if (state !== cellState.ALIVE && state !== cellState.DEAD) {
      throw new Error('Invalid State');
    }
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
