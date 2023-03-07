import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Image,
  Button,
  CardBody,
  SimpleGrid,
  Card,
  CardHeader,
  HStack,
} from "@chakra-ui/react";
import { PhoneIcon, Icon } from "@chakra-ui/icons";
import facebook from "../../assets/facebook.svg";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

/*
centeredSlides={true}
        loop={true}
        keyboard={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Keyboard]}
        onSlideChange={(swiper) => {
          console.log("swiper :", swiper);
        }}
        className="mySwiper"
*/

export const Skill = () => {
  return (
    <Box w="100%">
      <Swiper spaceBetween={40} slidesPerView={5}>
        {slideImages.map((img, i) => (
          <SwiperSlide key={i} title={img.title}>
            {({ isActive }) => (
              <Box
                w="9.5rem"
                h="9.5rem"
                p="2rem"
                bg="red"
                borderRadius="1.5rem"
                display="flex"
                alignItems="center"
                flexDirection="column"
                boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
      border="1px solid rgba(0, 0, 0, 0.2)"
              >
                <Image
                  src={img.src}
                  w="3.5rem"
                  h="3.5rem"
                  zIndex={isActive ? "3" : "1"}
                />
                <Text fontSize="1.2rem" fontWeight="bold">
                  {img.title}
                </Text>
              </Box>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
