import React, { useState, useEffect } from 'react';
import Game from '../Game/Game';
import { cellState } from '../Cells/CellState';
import { Cell } from '../Cells/Cell';

interface Props {
  number: number;
}

const GameBoard: React.FC<Props> = (props) => {
  const [game, setGame] = useState<Game>(
    new Game([[new Cell(cellState.DEAD)]])
  );
  const [isLive, setIsLive] = useState<boolean>(false);

  const getNextGameState = () => {
    const newState = game.nextState();
    const next = new Game(newState);
    setGame(next);
  };

  useEffect(() => {
    const grid = Array.from(Array(props.number), () =>
      Array(props.number).fill(cellState.DEAD)
    );

    const newGame = new Game(grid);
    setGame(newGame);
  }, [props.number]);

  let interval: any;

  useEffect(() => {
    if (isLive) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      interval = setTimeout(() => {
        getNextGameState();
      }, 1000);
    }
  }, [game, isLive]);

  const changeCellState = (row: number, col: number) => {
    const newGrid = game.state.map((gridRow, rowNum) => {
      return gridRow.map((cell, colNum) => {
        if (rowNum === row && colNum === col) {
          return cell.state === cellState.DEAD
            ? new Cell(cellState.ALIVE)
            : new Cell(cellState.DEAD);
        }
        return cell.state === cellState.ALIVE
          ? new Cell(cellState.ALIVE)
          : new Cell(cellState.DEAD);
      });
    });

    const newGame = new Game(newGrid);

    setGame(newGame);
  };

  const handleStart = () => {
    setIsLive(true);
    getNextGameState();
  };

  const handleStop = () => {
    setIsLive(false);
    clearTimeout(interval);
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
                      onClick={
                        !isLive
                          ? () => {
                              changeCellState(rowNum, colNum);
                            }
                          : undefined
                      }
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
            handleStop();
          }}
        >
          Stop
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
