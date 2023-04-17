import { useState } from "react";
import { NextPage } from "next";
import { MainScreen } from "./components/main";
import { GameScreen } from "./components/game";

export const MemoryGame: NextPage = () => {
  // VARIABLES DE ESTADO
  const [stateGame, setStateGame] = useState(0);
  const [level, setLevel] = useState(0);

  // CAMBIAR DIFICULTAD
  const changeDifficulty = () => {
    setLevel(level === 2 ? 0 : level + 1);
  };

  // CAMBIAR EL ESTADO DE JUEGO 0: NO INICIADO, 1: EN PROCESO, 2:FINALIZAO
  const changeStateGame = (value: number) => {
    setStateGame(value);
  };

  return (
    <>
      <MainScreen
        setStart={changeStateGame}
        level={level}
        setLevel={setLevel}
      />
      <GameScreen numCards={level} setStateGame={setStateGame} />
    </>
  );
};
