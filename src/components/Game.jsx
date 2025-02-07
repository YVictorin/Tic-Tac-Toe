import Board from "./Board";
import { useState } from "react";

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]); //this is an array of an array of 9 null values
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];    //no need for useState the curent square is always the last sqaure in the history array
    const xIsNext = currentMove % 2 === 0; //no need for useState here

    
    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];   //you only need go back to the current move and then move forward
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
      setCurrentMove(nextMove);
    }


    //looping through the history and checks to see if a move was made first
    const moves = history.map((squares, move) => {
      let description;
      if(move > 0) {
        description = "Go to move #" + move;
      } else {
        description = "Go to game start";
      }

      return (
        <li key={squares}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      )
    });

    return (
        <div className="game">
          <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
          <div className="game-info">
            <ol>{moves}</ol>
          </div>
        </div>
      );
}