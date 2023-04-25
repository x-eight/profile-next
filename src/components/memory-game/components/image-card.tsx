import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import React, { useEffect, useState, FC } from "react";
import { logoCard, logoType } from "./logos";

type Props = {
  card: logoType;
  isReset: boolean;
  setFirstCardId: React.Dispatch<React.SetStateAction<number | undefined>>;
  setSecondCardId: React.Dispatch<React.SetStateAction<number | undefined>>;
  firstCardId: number | undefined;
  secondCardId: number | undefined;
  setIsReset: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ImageCard: FC<Props> = ({
  card,
  isReset,
  setIsReset,
  setFirstCardId,
  setSecondCardId,
  firstCardId,
  secondCardId,
}) => {
  const [image, setImage] = useState(logoCard.path);

  const selectCard = (id: number) => {
    if (image === logoCard.path) {
      setImage(card.path);
    }else{
      return
    }

    if(firstCardId){
      setSecondCardId(id)
    }else{
      setFirstCardId(id)
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timer;
    if (isReset) {
      timeoutId = setTimeout(() => {
        if (secondCardId) {
          console.log({
            page: "image-card.tsx",
            firstCardId: firstCardId,
            secondCardId: secondCardId,
          });
          if ([firstCardId, secondCardId].includes(card.id)) {
            setImage(logoCard.path);
          }
          setFirstCardId(undefined);
          setSecondCardId(undefined);
        }
        setIsReset(false);
      }, 700);
    }
    return () => clearTimeout(timeoutId);
  }, [isReset]);

  return (
    <GridItem backgroundColor="red" cursor="pointer">
      <Image
        title={card.name}
        backgroundColor="blue"
        src={image}
        w={["5rem","12rem","20rem"]}
        h={["5rem","12rem","20rem"]}
        objectFit="cover"
        transition="transform 0.5s ease-in-out"
        transformOrigin="center center"
        transform={image === card.path ? "rotateY(0deg)" : "rotateY(180deg)"}
        onClick={() => selectCard(card.id)}
        pointerEvents={isReset ? "none" : "auto"}
      />
    </GridItem>
  );
};
