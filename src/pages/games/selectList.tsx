import React from "react";
import { MemoryGame } from "../../components/memory-game";
import { TicTacToeGame } from "../../components/tic_tac_toe";

const SelectGames = (game:number) => {
  if (game === 1) {
    return (<MemoryGame />);
  } else if (game === 2) {
    return (<TicTacToeGame />);
  } else {
    return null;
  }
}

export default SelectGames
