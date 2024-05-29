import React, { useEffect, useState } from "react";
import "./styles.css";
import Square from "./Square";

function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(""));
    const [colors, setColors] = useState(Array(9).fill(""))
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState("");

    function getWinner(squares) {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
        ];

        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i];

            if (
                squares[x] &&
                squares[x] === squares[y] &&
                squares[x] === squares[z]
            ) {
                return squares[x];
            }
        }

        return null;
    }

    function handleClick(getCurrentSquare) {
        let cpySquares = [...squares];
        let cpyColors = [...colors]
        if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
        cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
        cpyColors[getCurrentSquare] = isXTurn ? "blue" : "yellow"
        setIsXTurn(!isXTurn);
        setSquares(cpySquares);
        setColors(cpyColors);
    }

    function handleRestart() {
        setIsXTurn(true);
        setSquares(Array(9).fill(""));
        setColors(Array(9).fill(""))
    }

    useEffect(() => {
        if (!getWinner(squares) && squares.every((item) => item !== "")) {
            setStatus(`This is a draw ! Please restart the game`);
        } else if (getWinner(squares)) {
            setStatus(`Winner is ${getWinner(squares)}. Please restart the game`);
        } else {
            setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
        }
    }, [squares, isXTurn]);

    return <div className="tic-tac-toe-container">

        <div className="row">
            
            <Square value={squares[0]} onClick={() => handleClick(0)} color={colors[0]} />
            <Square value={squares[1]} onClick={() => handleClick(1)} color={colors[1]}/>
            <Square value={squares[2]} onClick={() => handleClick(2)} color={colors[2]}/>
        </div>
        <div className="row">
            <Square value={squares[3]} onClick={() => handleClick(3)} color={colors[3]} />
            <Square value={squares[4]} onClick={() => handleClick(4)} color={colors[4]}/>
            <Square value={squares[5]} onClick={() => handleClick(5)} color={colors[5]}/>
        </div>
        <div className="row">
            <Square value={squares[6]} onClick={() => handleClick(6)} color={colors[6]} />
            <Square value={squares[7]} onClick={() => handleClick(7)} color={colors[7]}/>
            <Square value={squares[8]} onClick={() => handleClick(8)} color={colors[8]}/>
        </div>
        <h1>{status}</h1>
        <button onClick={handleRestart}>Restart</button>


    </div>;
}

export default TicTacToe;
