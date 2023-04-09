import { useState, useEffect } from "react";
import { Box,Flex } from "@chakra-ui/react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CustomCard } from "./components/card";

const slideImages = [
  { title: "blender", src: "blender.svg", index: "nft 0" },
  { title: "css", src: "css.svg", index: "nft 1" },
  { title: "fastify", src: "fastify.svg", index: "nft 2" },
  { title: "figma", src: "figma.svg", index: "nft 3" },
  { title: "html", src: "html.svg", index: "nft 4" },
  { title: "JavaScript", src: "JavaScript.svg", index: "nft 5" },
  { title: "react", src: "react.svg", index: "nft 2" }, //6
  { title: "django", src: "django.svg", index: "nft 3" },
  //=========================================================//
  { title: "blender", src: "blender.svg", index: "nft 0" },
  { title: "css", src: "css.svg", index: "nft 1" },
  { title: "fastify", src: "fastify.svg", index: "nft 2" },
  { title: "figma", src: "figma.svg", index: "nft 3" },
  { title: "html", src: "html.svg", index: "nft 4" },
  { title: "JavaScript", src: "JavaScript.svg", index: "nft 5" },
  { title: "react", src: "react.svg", index: "nft 2" }, //14
  { title: "django", src: "django.svg", index: "nft 3" },
];

export const Skill = () => {
  function handleMouseEnter(event: any) {
    //const slideIndex = Number(event.currentTarget.dataset.swiperSlideIndex);
    event.currentTarget.style.transform = "scale(1.2)";
  }

  function handleMouseLeave(event: any) {
    event.currentTarget.style.transform = "scale(1)";
  }

  const [width, setWidth] = useState(7);
 
  useEffect(() => {
    function handleResize() {
      if(window.innerWidth>1000 && window.innerWidth<1386){
        setWidth(5)
      }else if(window.innerWidth<1000){
        setWidth(3)
      }else if(window.innerWidth<530){
        setWidth(2)
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    setWidth(7)
    if(window.innerWidth>1000 && window.innerWidth<1386){
      setWidth(5)
    }else if(window.innerWidth<1000){
      setWidth(3)
    }else if(window.innerWidth<530){
      setWidth(2)
    }
  }, []);
  
  return (
    <Flex w="100%">
      <Swiper
        slidesPerView={width}
        centeredSlides={true}
        loop={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {slideImages.map((img, i) => (
          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={i}
            title={img.title}
            
          >
            {() => <CustomCard image={img.src} title={img.title} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};
