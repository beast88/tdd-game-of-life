import React, { useState, useEffect } from 'react';
import Game from '../Game/Game';
import { cellState } from '../Cells/CellState';
import { CellInterface, Cell } from '../Cells/Cell';

interface Props {
  number: number;
}

const GameBoard: React.FC<Props> = (props) => {
  const [board, setBoard] = useState<Array<Array<CellInterface>> | undefined>();

  useEffect(() => {
    const grid = Array.from(Array(props.number), () =>
      Array(props.number).fill(cellState.DEAD)
    );

    const game = new Game(grid);
    setBoard(game.state);
  }, [props.number]);

  const changeCellState = (row: number, col: number) => {
    const newGrid = board?.map((gridRow, rowNum) => {
      return gridRow.map((cell, colNum) => {
        if (rowNum === row && colNum === col) {
          return new Cell(
            cell.state === cellState.DEAD ? cellState.ALIVE : cellState.DEAD
          );
        }
        return cell;
      });
    });

    setBoard(newGrid);
  };

  return (
    <section className="game">
      <table>
        <tbody>
          {board?.map((row, rowNum) => {
            return (
              <tr key={rowNum}>
                {row.map((cell, colNum) => {
                  return (
                    <td
                      key={colNum}
                      className="cell"
                      style={{
                        background:
                          cell.state === cellState.ALIVE
                            ? 'black'
                            : 'transparent',
                      }}
                      onClick={() => {
                        changeCellState(rowNum, colNum);
                      }}
                    ></td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button>Start</button>
    </section>
  );
};

export default GameBoard;
