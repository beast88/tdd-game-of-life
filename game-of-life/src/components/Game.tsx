import React, { useState, useEffect } from 'react';
import Game from '../Game/Game';
import { cellState } from '../Cells/CellState';
import { CellInterface } from '../Cells/Cell';

interface Props {
  number: number;
}

const GameBoard: React.FC<Props> = (props) => {
  const [board, setBoard] = useState<Array<Array<CellInterface>> | null>(null);

  useEffect(() => {
    const grid = Array.from(Array(props.number), () =>
      Array(props.number).fill(cellState.DEAD)
    );

    const game = new Game(grid);
    setBoard(game.state);
  }, [props.number]);

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
                    ></td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default GameBoard;
