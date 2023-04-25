import { Flex } from "@chakra-ui/react";
import { CustomCard } from "./card";
  
  const slideImages = [
    { title: "blender", src: "blender.svg", index: "nft 0" },
    { title: "css", src: "css.svg", index: "nft 1" },
    { title: "fastify", src: "fastify.svg", index: "nft 2" },
    { title: "figma", src: "figma.svg", index: "nft 3" },
    { title: "html", src: "html.svg", index: "nft 4" },
    { title: "JavaScript", src: "JavaScript.svg", index: "nft 5" },
    { title: "react", src: "react.svg", index: "nft 2" },
    { title: "django", src: "django.svg", index: "nft 3" },
  ];

  export const ListCard = () => {
    return (
      <Flex flexDir="row">
        {slideImages.map((img, i) => (<CustomCard key={i} image={img.src} title={img.title}/>))}
      </Flex>
    );
  };