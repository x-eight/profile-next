import {
  Heading,
  Box,
  Center,
  Image,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export const CardGame = ({
  cover,
  id,
  title,
  description,
  setGameId,
}: {
  cover: string;
  id: number;
  title: string;
  description: string;
  setGameId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <Center py={6}>
      <Box
        w={["10rem", "20rem"]}
        h="25rem"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image h="8rem" w={"full"} src={cover} objectFit={"cover"} />

        <Box p={6} h="17rem">
          <Stack spacing={0} align={"center"} h="10rem">
            <Heading fontSize={"2xl"} fontWeight={400} fontFamily={"body"}>
              {title}
            </Heading>
            <Text color={"gray.500"}>
              {description.length < 101
                ? description
                : `${description.slice(0, 100)} ...`}
            </Text>
          </Stack>

          <Button
            onClick={() => setGameId(id)}
            w={"full"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Start
          </Button>
        </Box>
      </Box>
    </Center>
  );
};
