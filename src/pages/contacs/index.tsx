import { ReactElement } from "react";
import { NextPage } from "next";
import {
  Box,
  SimpleGrid,
  Text,
  Stack,
  Flex,
  Input,
  Textarea,
  Button,
  Circle,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import { FormControl, FormLabel } from "@chakra-ui/react";
//import Image from "next/image";
import facebook from "../../assets/facebook.svg";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";
import {
  PhoneIcon,
  StarIcon,
  AtSignIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const Contacs: NextPage = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack>
          <Text fontSize={["6vh"]} fontWeight="bold" p={"2vh"}>
            Contacs
          </Text>
          <Box>
            <Box maxW="500px" p={"2vh"}>
              <Text fontSize={["sm", "md", "lg"]} mb={2}>
                Name
              </Text>
              <Input placeholder="John Doe" />
            </Box>
            <Box maxW="500px" p={"2vh"}>
              <Text fontSize={["sm", "md", "lg"]} mb={2}>
                Email
              </Text>
              <Input placeholder="John@doe.com" />
            </Box>
            <Box maxW="500px" p={"2vh"}>
              <Text fontSize={["sm", "md", "lg"]} mb={2}>
                Message
              </Text>
              <Textarea placeholder="Type your message...." />
            </Box>
            <Box maxW="500px" p={"2vh"} dir="rtl">
              <Button
                w={"12vh"}
                leftIcon={<ArrowRightIcon />}
                colorScheme="blue"
                variant="outline"
              >
                Send
              </Button>
            </Box>
          </Box>
        </Stack>
        <Stack>
          <Box p={["0px", "0px", "5.5rem"]}></Box>
          <Box display="flex" mb="3rem !important">
            <Circle size="2.8rem" bg="#F56539">
              <AtSignIcon />
            </Circle>
            <Text fontWeight="bold" fontSize="1.5rem" pl={"1rem"}>janedoe.test@gmail.com</Text>
          </Box>
          <Box display="flex" mb="3rem !important">
            <Circle size="2.8rem" bg="#F56539">
              <PhoneIcon />
            </Circle>
            <Text fontWeight="bold" fontSize="1.5rem" pl={"1rem"}>+915588776600</Text>
          </Box>
          <Box display="flex" mb="3rem !important">
            <Circle size="2.8rem" bg="#F56539">
              <StarIcon />
            </Circle>
            <Text fontWeight="bold" fontSize="1.5rem" pl={"1rem"}>Menlo Park, California, United States - 673822</Text>
          </Box>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default Contacs;