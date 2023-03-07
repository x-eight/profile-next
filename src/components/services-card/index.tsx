import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  CardFooter,
  Button,
  CardBody,
  SimpleGrid,
  Card,
  CardHeader,
  HStack,
} from "@chakra-ui/react";
import { PhoneIcon, Icon } from "@chakra-ui/icons";
import facebook from "../../assets/facebook.svg";
import Image from "next/image";

export const Service = () => {

  return (
    <SimpleGrid columns={{ sm:2, md: 4,lg:5,xl:7 }} spacing={10}>
      <Card w="11rem" h="11rem" borderRadius="1.5rem" p="2rem">
        <Image src={facebook} alt="light" />
        <Text w="4rem" h="4rem" alignSelf="center" textAlign="center">
          Content Writing
        </Text>
      </Card>
      <Card w="11rem" h="11rem" borderRadius="1.5rem" p="2rem">
        <Image src={facebook} alt="light" />
        <Text w="4.5rem" h="4.5rem" alignSelf="center" textAlign="center">
        Email Marketing
        </Text>
      </Card>
      <Card w="11rem" h="11rem" borderRadius="1.5rem" p="2rem">
      <Image src={facebook} alt="light" />
        <Text w="4.5rem" h="4.5rem" alignSelf="center" textAlign="center">
            Web Design
        </Text>
      </Card>
      <Card w="11rem" h="11rem" borderRadius="1.5rem" p="2rem">
        <PhoneIcon />
        <Text>Photography</Text>
      </Card>
      <Card w="11rem" h="11rem" borderRadius="1.5rem" p="2rem">
        <PhoneIcon />
        <Text>Video Editing</Text>
      </Card>
      <Card w="11rem" h="11rem" borderRadius="1.5rem" p="2rem">
        <PhoneIcon />
        <Text>Ebook Writing</Text>
      </Card>
      <Card w="11rem" h="11rem" borderRadius="1.5rem" p="2rem">
        <PhoneIcon />
        <Text>Blog Posting</Text>
      </Card>
    </SimpleGrid>
  );
};
