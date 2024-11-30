import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const navigate = useNavigate();

  const [scores, setScores] = useState({ X: 0, O: 0 });


  const handleCellClick = (index) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";

    const winner = checkWinner(newBoard);

    setBoard(newBoard);
    setIsXNext(!isXNext);

    if (winner) {
      alert(`Player ${winner} has won!`);
      setBoard(Array(9).fill(null));
      setIsXNext(true);
      setScores({
        ...scores,
        [winner]: scores[winner] + 1,
      });
    }
    else if (newBoard.every((cell) => cell)) {
      alert("Game is a draw!");
      setBoard(Array(9).fill(null));
      setIsXNext(true);
    }
    
  };

  const checkWinner = (board) => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of combinations) {
      const [a, b, c] = combo;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex ">
        <div
          onClick={() => navigate("/")}
          className="hover:text-yellow-500 cursor-pointer text-white font-bold text-xl max-w-min"
        >
          <h1>Home</h1>
        </div>
      </div>

      <div className="text-center p-4 text-white ">
        <h1 className="text-4xl font-bold">Tic Tac Toe</h1>
      </div>
      <div className="flex justify-between ">
      <div className="text-left p-4 text-white mx-6">
        <h1 className="text-xl font-bold">X-Score: {scores.X}</h1>
      </div>

      <div className="text-left p-4 text-white">
        <h1 className="text-xl font-bold">O-Score: {scores.O}</h1>
      </div>
      </div>
      

      <div className="text-center p-4">
        <h1 className="text-xl font-bold text-yellow-500">
          {isXNext ? "Player X's Turn" : "Player O's Turn"}
        </h1>
      </div>

      <div className="flex flex-1 justify-center items-center mb-36">
        <div className="grid grid-cols-3 w-72 h-72">
          {board.map((value, index) => (
            <div
              key={index}
              onClick={() => handleCellClick(index)}
              className={`flex justify-center items-center text-2xl w-24 h-24 cursor-pointer transition transform hover:scale-105 ${
                value === "X"
                  ? "text-yellow-500"
                  : value === "O"
                  ? "text-white"
                  : isXNext
                  ? "hover:text-yellow-500 hover:shadow-[0_0_15px_rgba(255,255,0,0.8)]"
                  : "hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              } ${value ? "hover:shadow-[0_0_15px_rgba(255,0,0,0.8)]" : ""} ${
                index < 6 ? "border-b-4" : ""
              } ${index % 3 !== 2 ? "border-r-4" : ""} border-stone-500`}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
