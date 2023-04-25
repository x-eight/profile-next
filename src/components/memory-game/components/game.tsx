import { Flex, Grid } from "@chakra-ui/react";
import React, { useEffect, useState, FC } from "react";
import { ImageCard } from "./image-card";
import { getCards, levelParams, logoType } from "./logos";

type Props = {
  gameState: number;
  currentLevel: levelParams;
};

export const GameScreen: FC<Props> = ({ gameState, currentLevel }) => {
  let [cards, setCards] = useState<logoType[]>([]);

  let [firstCardId, setFirstCardId] = useState<undefined | number>(undefined);
  let [secondCardId, setSecondCardId] = useState<undefined | number>(undefined);
  let [isReset, setIsReset] = useState<boolean>(false);

  useEffect(() => {
    if (firstCardId && secondCardId) {
      if (firstCardId !== secondCardId) {
        setIsReset(true);
      } else {
        setFirstCardId(undefined);
        setSecondCardId(undefined);
      }
    }
  }, [firstCardId, secondCardId]);

  useEffect(() => {
    const foundCards = getCards(currentLevel.numCards / 2);
    setCards(foundCards);
  }, [currentLevel]);

  return (
    <Flex justifyContent="center" flexWrap="wrap">
      <Grid
        templateColumns={`repeat(${currentLevel.x}, 1fr)`}
        templateRows={`repeat(${currentLevel.y}, 1fr)`}
        gap={4}
      >
        {cards.map((c, i) => (
          <ImageCard
            card={c}
            isReset={isReset}
            setFirstCardId={setFirstCardId}
            setSecondCardId={setSecondCardId}
            key={i}
            firstCardId={firstCardId}
            secondCardId={secondCardId}
            setIsReset={setIsReset}
          />
        ))}
      </Grid>
    </Flex>
  );
};
