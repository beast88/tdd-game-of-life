import React, { useState, useEffect } from 'react';
import Game from '../Game/Game';
import { cellState } from '../Cells/CellState';

interface Props {
  number: number;
}

const GameBoard: React.FC<Props> = (props) => {
  const [game, setGame] = useState<Game>(new Game([[0]]));
  const [isLive, setIsLive] = useState<boolean>(false);

  useEffect(() => {
    const grid = Array.from(Array(props.number), () =>
      Array(props.number).fill(cellState.DEAD)
    );

    const newGame = new Game(grid);
    setGame(newGame);
  }, [props.number]);

  const changeCellState = (row: number, col: number) => {
    const newGrid = game.state.map((gridRow, rowNum) => {
      return gridRow.map((cell, colNum) => {
        if (rowNum === row && colNum === col) {
          return cell.state === cellState.DEAD
            ? cellState.ALIVE
            : cellState.DEAD;
        }
        return cell.state === cellState.ALIVE
          ? cellState.ALIVE
          : cellState.DEAD;
      });
    });

    const newGame = new Game(newGrid);

    setGame(newGame);
  };

  const handleStart = () => {
    setIsLive(true);
  };

  const handleReset = () => {
    setIsLive(false);
  };

  return (
    <section className="game">
      <table>
        <tbody>
          {game.state.map((row, rowNum) => {
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
      {isLive ? (
        <button
          className="button"
          onClick={() => {
            handleReset();
          }}
        >
          Reset
        </button>
      ) : (
        <button
          className="button"
          onClick={() => {
            handleStart();
          }}
        >
          Start
        </button>
      )}
    </section>
  );
};

export default GameBoard;
