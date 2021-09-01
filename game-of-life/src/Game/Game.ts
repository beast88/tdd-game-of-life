import { Cell, CellInterface } from '../Cells/Cell';

export default class Game {
  state: Array<Array<CellInterface>>;

  constructor(state: Array<Array<number>>) {
    this.state = state.map((row) =>
      row.map((cellState) => new Cell(cellState))
    );
  }

  getCell(row: number, column: number): CellInterface {
    return this.state[row][column];
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

  nextState(): void {
    this.state = this.state.map((row, rowNum) => {
      return row.map((cell, colNum) => {
        return new Cell(
          cell.getNextState(this.getLiveNeighbors(rowNum, colNum))
        );
      });
    });
  }
}
