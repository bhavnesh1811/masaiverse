import React from "react";
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";

const News = () => {
  const newsData = [
    {
      src: "https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Article_Prateek_Shukla_Gen_AI_92324e2d6b.jpeg",
      alt: "img1",
      text: "Empowering Education Through GenAI",
    },
    {
      src: "https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thungy_1_420b226e5b.webp",
      alt: "img2",
      text: "Masai School targets fivefold revenue growth in three years",
    },
    {
      src: "https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thingy_2_f2c52e6fcf.webp",
      alt: "img3",
      text: "Beyond Degrees: Embracing Alternative Credentialing and Micro-learning in Tech Recruitment",
    },
  ];

  return (
    <Stack m={{ base: "15px", md: "25px", lg: "25px" }}>
      <Heading
        size="lg"
        fontSize={{ base: "20px", md: "35px", lg: "40px" }}
        textAlign="center"
      >
        Masai In <span style={{ color: "red" }}>News</span>
      </Heading>
      <Stack
        display="flex"
        width="90%"
        margin="auto"
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        {newsData.map((item, index) => (
          <Box
            key={index}
            margin="10px"
            borderRadius={"12px"}
            width={{ base: "95%", md: "95%", lg: "33%" }}
            boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
          >
            <Image
              display={"block"}
              m={"auto"}
              src={item.src}
              alt={item.alt}
              height="60%"
              width="100%"
              objectFit="cover"
            />
            <Text
              fontSize={{ base: "15px", md: "22px", lg: "22px" }}
              fontWeight="bold"
              textAlign={{ base: "center", md: "center", lg: "left" }}
              m="12px"
            >
              {item.text}
            </Text>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default News;
