import { Box,Flex,Grid,GridItem } from '@chakra-ui/react';
import React, { useEffect, useState,Dispatch, FC, SetStateAction } from 'react';

import { Card } from './card';
import { arrCardsRand } from './createArrCardsRand';
import { ImageCard } from './image-card';
import { getCards, logoType } from './logos';

type Props = {
    level: number;
    setStateGame: Dispatch<SetStateAction<number>>;
    levelType:any
};

export const GameScreen: FC<Props> = ({ level, setStateGame,levelType }) => {
  let [cards, setTCards] = useState<logoType[]>([])

  useEffect(() => {
    const ss = getCards(levelType[level].numCards/2)
    setTCards(ss)
    console.log("ss :",ss)
  }, [level])
  
  return (
    <Flex justifyContent="center" flexWrap="wrap">
      <Grid templateColumns={`repeat(${levelType[level].x}, 1fr)`}
      templateRows={`repeat(${levelType[level].y}, 1fr)`}
      gap={4}>
        {cards.map(c=><ImageCard text={c.name} card={c}/>)}

      </Grid>
    </Flex>
  )
}

