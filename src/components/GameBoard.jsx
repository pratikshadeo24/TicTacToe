import {useState} from 'react';

export default function GameBoard({activePlayerSymbol, onSelect, board}){

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) =>
            <li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) => <li key={colIndex}><button onClick={()=>onSelect(rowIndex, colIndex)} disabled={col!=null}>{col}</button></li>)}
                </ol>
            </li>)}
        </ol>
    );
}