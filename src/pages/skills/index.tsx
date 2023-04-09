import { NextPage } from "next";
import { Text, Stack } from "@chakra-ui/react";
import { Layout } from "../../components/layouts";
import { Service } from "../../components/services-card";
import { Skill } from "../../components/skills-card";

const Skills: NextPage = () => {
  return (
    <Layout title="Skills">
      <Stack alignItems="center">
        <Text fontSize={["6vh"]} fontWeight="bold" p={"2vh"}>
          Services
        </Text>
        <Text fontWeight="bold" fontSize="1.5rem" pl={"1rem"}>
          These are some of the services I offer. Reach out to me if I can help
          you with any!
        </Text>
        <Service />

        <Text fontSize={["6vh"]} fontWeight="bold" p={"2vh"}>
          Skills
        </Text>
        <Skill />
      </Stack>
    </Layout>
  );
};
export default Skills;
