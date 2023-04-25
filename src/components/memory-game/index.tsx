import { useState } from "react";
import { NextPage } from "next";
import { MainScreen } from "./components/main";
import { GameScreen } from "./components/game";
import { Box } from "@chakra-ui/react";
import { GameState, levelParams } from "./components/logos";

export const MemoryGame: NextPage = () => {

  const levels:levelParams[] = [
    {id:0,numCards:6,name:"Easy",x:3,y:2},
    {id:1,numCards:12,name:"Medium",x:3,y:4},
    {id:2,numCards:16,name:"Hard",x:4,y:4}
  ]

  // CAMBIAR EL ESTADO DE JUEGO 0: NO INICIADO, 1: EN PROCESO, 2:FINALIZAO
  let [gameState, setGameState] = useState(0)

  const [level, setLevel] = useState<levelParams>(levels[0])

  return (
    <Box>
      <MainScreen
        setGameState={setGameState}
        gameState={gameState}
        setLevel={setLevel}
        levels={levels}
        currentLevel={level}
      />
      
      {gameState===GameState.START ? null:(<GameScreen gameState={gameState} currentLevel={level}/>)}
    </Box>
  );
};
