import { Flex } from "@chakra-ui/react";
import facebook from "../../assets/facebook.svg";
import { CustomCard } from "./components/card";

export const Service = () => {
  return (
    <Flex justifyContent="center" flexWrap="wrap">
      <CustomCard image={facebook} title="Content Writing" />
      <CustomCard image={facebook} title="Email Marketing" />
      <CustomCard image={facebook} title="Web Design" />

      <CustomCard image={facebook} title="Photography" />
      <CustomCard image={facebook} title="Video Editing" />
      <CustomCard image={facebook} title="Ebook Writing" />
      <CustomCard image={facebook} title="Blog Posting" />
    </Flex>
  );
};
