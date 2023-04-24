import { useState } from "react";
import { NextPage } from "next";
import { MainScreen } from "./components/main";
import { GameScreen } from "./components/game";

export const MemoryGame: NextPage = () => {

  const levelType = [
    {id:0,numCards:6,level:"Easy",x:3,y:2},
    {id:1,numCards:12,level:"Medium",x:3,y:4},
    {id:2,numCards:16,level:"Hard",x:4,y:4}
  ]

  // CAMBIAR EL ESTADO DE JUEGO 0: NO INICIADO, 1: EN PROCESO, 2:FINALIZAO
  const [stateGame, setStateGame] = useState(0);

  const [level, setLevel] = useState(0);

  return (
    <>
      <MainScreen
        setStart={setStateGame}
        level={level}
        setLevel={setLevel}
        levelType={levelType}
      />
      <GameScreen level={level} setStateGame={setStateGame} levelType={levelType}/>
    </>
  );
};
