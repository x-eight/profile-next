import { Dispatch, FC, SetStateAction,useState } from "react";
import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { GameState, levelParams } from "./logos";
import { Cronometro } from "./chronometer";

type Props = {
  setGameState: Dispatch<SetStateAction<number>>;
  gameState :number;
  setLevel: Dispatch<SetStateAction<levelParams>>;
  levels:levelParams[];
  currentLevel :levelParams
};

export const MainScreen: FC<Props> = ({
  setGameState,
  gameState,
  setLevel,
  levels,
  currentLevel
}) => {
  let [index, setIndex] = useState(0)
  let [buttonName, setButtonName] = useState<string>("Start")
  
  let [isStart, setIsStart] = useState(false)

  const increaseDifficulty = () => {
    if (levels[index + 1]) {
      setLevel(levels[index + 1])
      setIndex(index => index + 1)
    }else{
      setLevel(levels[0])
      setIndex(0)
    }
  };

  const decreaseDifficulty = () => {
    if (levels[index - 1]) {
      setLevel(levels[index - 1])
      setIndex(index => index - 1)
    }else{
      setLevel(levels[2])
      setIndex(2)
    }
  };

  const changeState = () => {
    if (gameState===GameState.START) {
      setGameState(GameState.PROCESS)
      setIsStart(true)
      setButtonName("Reset")
    }
    if (gameState===GameState.PROCESS) {
      setGameState(GameState.START)
      setIsStart(false)
      setButtonName("Start")
    }
  };

  return (
    <Flex flexDir="column" border="4px solid #252A3f" m="2rem">
      <Flex justifyContent="center" alignItems="center">
        <Text fontWeight="bold" fontSize="2rem">
          Memory Game
        </Text>
      </Flex>
      <Flex justifyContent="center" alignItems="center" flexDir="column">
        <Text fontWeight="bold" fontSize="1rem">
          Select Level
        </Text>
        <Flex m="1rem 0rem">
          <IconButton aria-label="Add to friends" border="double" icon={<MinusIcon />} onClick={decreaseDifficulty} />
          <Flex w="5rem" justifyContent="center" alignItems="center">{currentLevel.name}</Flex>
          <IconButton aria-label="Add to friends" border="double" icon={<AddIcon />} onClick={increaseDifficulty} />
        </Flex>
        <Button colorScheme='blue' variant='outline' w="6rem" h="2.5rem" onClick={changeState}>{buttonName}</Button>
      </Flex>
      <Cronometro isStart={isStart} />
    </Flex>
  );
};
