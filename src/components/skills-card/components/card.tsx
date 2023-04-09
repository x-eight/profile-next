import { useState,useEffect } from "react";
import { Box, Flex, Text, Img } from "@chakra-ui/react";

export const CustomCard = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => {
  return (
    <Flex
      w="9rem"
      h="9rem"
      m="1rem 2rem"
      borderRadius="1.5rem"
      flexDir="column"
      boxShadow="0px 0px 20px 0px #FFA500"
      justifyContent="center"
      alignItems="center"
    >
      <Img src={image} width="3.5rem" height="3.5rem" />
      <Text fontSize="1.2rem" fontWeight="bold">
        {title}
      </Text>
    </Flex>
  );
};
