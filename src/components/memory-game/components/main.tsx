import { Button } from "./button";
import { Dispatch, FC, SetStateAction } from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

type Props = {
  setStart: Dispatch<SetStateAction<number>>;
  level: number;
  setLevel: Dispatch<SetStateAction<number>>;
  levelType:any
};

export const MainScreen: FC<Props> = ({
  setStart,
  level,
  setLevel,
  levelType
}) => {

  // CAMBIAR DIFICULTAD
  const increaseDifficulty = () => {
      if (level<2) {
        setLevel(level + 1);
      }else{
        setLevel(0);
      }
    
  };

  const decreaseDifficulty = () => {
    if (level>0) {
        setLevel(level - 1);
    }else{
        setLevel(2);
    }
  };

  return (
    <Flex flexDir="column" backgroundColor="red">
      <Flex justifyContent="center" alignItems="center">
        <Text fontWeight="bold" fontSize="2rem">
          Memory Game
        </Text>
      </Flex>
      <Flex justifyContent="center" alignItems="center" flexDir="column">
        <Text fontWeight="bold" fontSize="1rem">
          Select Level
        </Text>
        <Flex>
          <IconButton aria-label="Add to friends" icon={<MinusIcon />} onClick={decreaseDifficulty} />
          <Flex w="5rem" justifyContent="center" alignItems="center">{levelType[level].level}</Flex>
          <IconButton aria-label="Add to friends" icon={<AddIcon />} onClick={increaseDifficulty} />
        </Flex>
        <Button label={"Start"} action={() => setStart(1)} />
      </Flex>
    </Flex>
  );
};
