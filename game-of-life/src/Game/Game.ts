import { Cell, CellInterface } from '../Cells/Cell';

export default class Game {
  state: Array<Array<CellInterface>>;

  constructor(state: Array<Array<CellInterface>>) {
    this.state = state;
  }

  getLiveNeighbors(row: number, column: number): number {
    let result = 0;

    this.state.forEach((gameRow, rowNum) => {
      gameRow.forEach((cell, colNum) => {
        if (
          //Neighbors Above
          (colNum === column - 1 && rowNum === row - 1) ||
          (colNum === column && rowNum === row - 1) ||
          (colNum === column + 1 && rowNum === row - 1) ||
          //Neighbors to the sides
          (colNum === column - 1 && rowNum === row) ||
          (colNum === column + 1 && rowNum === row) ||
          //Neighbors below
          (colNum === column - 1 && rowNum === row + 1) ||
          (colNum === column && rowNum === row + 1) ||
          (colNum === column + 1 && rowNum === row + 1)
        ) {
          result += cell.state;
        }
      });
    });

    return result;
  }

  nextState() {
    return this.state.map((row, rowNum) => {
      return row.map((cell, colNum) => {
        return new Cell(
          cell.getNextState(this.getLiveNeighbors(rowNum, colNum))
        );
      });
    });
  }
}
