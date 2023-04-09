import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export const CustomCard = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => {
  return (
    <Flex
      backgroundColor="red"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      w="11rem"
      h="11rem"
      borderRadius="1.5rem"
      m={["0.5rem 1rem", "0.5rem 1rem", "0.5rem 2rem"]}
    >
      <Box w="7rem" h="7rem">
        <Image src={image} />
      </Box>
      <Text>{title}</Text>
    </Flex>
  );
};
