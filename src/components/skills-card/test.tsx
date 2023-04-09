import { Box,
    Center,
    Flex,
    Text,
    Image } from "@chakra-ui/react";
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
  
  export const Skill = () => {
    return (
      <Box w="100%">
        <Swiper
          slidesPerView={3}
          navigation={true}
          centeredSlides={true}
          loop={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {slideImages.map((img, i) => (
            <SwiperSlide key={i} title={img.title}>
              {() => (
                <Flex
                  w="9rem"
                  h="9rem"
                  bg="red"
                  borderRadius="1.5rem"
                  flexDir="column"
                  boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
                  border="1px solid rgba(0, 0, 0, 0.2)"
                >
                  <Image
                    src={img.src}
                    w="3.5rem"
                    h="3.5rem"
                  />
                  <Text fontSize="1.2rem" fontWeight="bold">
                    {img.title}
                  </Text>
                </Flex>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    );
  };


/*
import { ListCard } from "./components/list-card";

export const Skill = () => {
  return (
    <ListCard />
  );
};
*/

/*
import { Box } from "@chakra-ui/react";
import { ListCard } from "./components/list-card";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Skill = () => {
  return (
    <Box w="100%">
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        loop={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
     
        speed={10000}
        modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide className="customWidth">
          <ListCard />
        </SwiperSlide>
        <SwiperSlide className="customWidth">
          <ListCard />
        </SwiperSlide>
        <SwiperSlide className="customWidth">
          <ListCard />
        </SwiperSlide>
        <SwiperSlide className="customWidth">
          <ListCard />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
*/
  