import { Box, Flex, Grid, GridItem,Image } from "@chakra-ui/react";
import React, { useEffect, useState, FC } from "react";
import { logoCard,logoType } from "./logos"

type Props = {
  text: string;
  card: logoType
};

export const ImageCard: FC<Props> = ({ text,card }) => {
  const [image, setImage] = useState(logoCard.path);

  const changeImage = () => {
    if (image === logoCard.path) {
      setImage(card.path);
    } else {
      setImage(logoCard.path);
    }
  };

  return (
    <GridItem backgroundColor="red" onClick={changeImage} cursor="pointer" title={text}>
      <Image
        backgroundColor="blue"
        src={image}
        w="100%"
        h="100%"
        objectFit="cover"
        transition="transform 0.5s ease-in-out"
        transformOrigin="center center"
        transform={image === logoCard.path ? "rotateY(0deg)" : "rotateY(180deg)"}
      />
    </GridItem>
  );
};