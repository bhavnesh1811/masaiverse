import React, { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

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

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box position="relative" overflow="hidden">
      <Flex overflow="hidden">
        <AnimatePresence initial={false} custom={currentIndex}>
          {photos.slice(currentIndex, currentIndex + 3).map((photo, index) => (
            <motion.img
              key={index}
              src={photo}
              alt={`Photo ${index}`}
              initial={{ x: index * 100 }}
              animate={{ x: 0 }}
              exit={{ x: -index * 100 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              style={{ flex: "0 0 33.33%", minWidth: "33.33%" }}
            />
          ))}
        </AnimatePresence>
      </Flex>

      <Box mt={2} textAlign="center">
        <Button onClick={prevPhoto} m={2}>
          Previous
        </Button>
        <Button onClick={nextPhoto} m={2}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
