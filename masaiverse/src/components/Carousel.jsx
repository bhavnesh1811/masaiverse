import React, { useEffect, useState } from "react";
import { Box, Button, Flex, useMediaQuery } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const photos = [
  "https://www.masaischool.com/images/new-homepage/community/community5.webp",
  "https://www.masaischool.com/images/new-homepage/community/community1.webp",
  "https://www.masaischool.com/images/new-homepage/community/community3.webp",
  "https://www.masaischool.com/images/new-homepage/community/community4.webp",
  "https://www.masaischool.com/images/new-homepage/community/community5.webp",
  "https://www.masaischool.com/images/new-homepage/community/community6.webp",
  "https://www.masaischool.com/images/new-homepage/community/community7.webp",
  "https://www.masaischool.com/images/new-homepage/community/community8.webp",
  "https://www.masaischool.com/images/new-homepage/community/community9.webp",
  "https://www.masaischool.com/images/new-homepage/community/community10.webp",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargerThanMedium] = useMediaQuery("(min-width: 769px)");
  const [isLargerThanSmall] = useMediaQuery("(min-width: 375px)");

  const numVisiblePhotos = isLargerThanMedium ? 4 : isLargerThanSmall ? 2 : 1;

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? photos.length - numVisiblePhotos : prevIndex - 1
    );
  };

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= photos.length - numVisiblePhotos ? 0 : prevIndex + 1
    );
  };

  // Function to automatically slide to the next photo
  const autoSlide = () => {
    nextPhoto();
  };

  // Set up a timer to automatically slide every 3 seconds (adjust the interval as needed)
  useEffect(() => {
    const interval = setInterval(autoSlide, 3000); // 3 seconds
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box position="relative" overflow="hidden">
      <Flex overflow="hidden">
        <AnimatePresence initial={false} custom={currentIndex}>
          {photos
            .slice(currentIndex, currentIndex + numVisiblePhotos)
            .map((photo, index) => (
              <motion.img
                key={index}
                src={photo}
                alt={`Photo ${index}`}
                initial={{ x: index * 100 }}
                animate={{ x: 0 }}
                exit={{ x: -index * 100 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                style={{
                  flex: `0 0 ${100 / numVisiblePhotos}%`,
                  minWidth: `${100 / numVisiblePhotos}%`,
                  height: "250px",
                }}
              />
            ))}
        </AnimatePresence>
      </Flex>

      <Flex mt={2} justifyContent={"center"} flexDirection={{base:"column-reverse", md:"row"}} m={{base:"10% auto",sm:"3% auto"}} align="center" gap={"20px"}>
        <Box p={{base:"10% auto",md:"0% 25%",lg:"0% 32%"}}>
          <Button colorScheme="red">Join Our Community</Button>
        </Box>
        <Box>
          <Button
            p="1px"
            color="red"
            border="1px solid red"
            borderRadius="12px"
            onClick={prevPhoto}
            mr={2}
          >
            <AiOutlineLeft />
          </Button>
          <Button
            p="1px"
            color="red"
            border="1px solid red"
            borderRadius="12px"
            onClick={nextPhoto}
            ml={2}
          >
            <AiOutlineRight />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Carousel;

// const photos = [
//     "https://www.masaischool.com/images/new-homepage/community/community5.webp",
//     "https://www.masaischool.com/images/new-homepage/community/community1.webp",
//     "https://www.masaischool.com/images/new-homepage/community/community3.webp",
//     "https://www.masaischool.com/images/new-homepage/community/community4.webp",
//     "https://www.masaischool.com/images/new-homepage/community/community5.webp",
//     "https://www.masaischool.com/images/new-homepage/community/community6.webp",
//     "https://www.masaischool.com/images/new-homepage/community/community7.webp",
//     "https://www.masaischool.com/images/new-homepage/community/community8.webp",
//     "https://www.masaischool.com/images/new-homepage/community/community9.webp",
//     "https://www.masaischool.com/images/new-homepage/community/community10.webp",
//   ];
