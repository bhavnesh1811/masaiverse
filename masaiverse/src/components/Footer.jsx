import {
  Box,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
  Container,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <Box backgroundColor={"#0A0103"} p={"20px 40px"}>
      <Flex justifyContent={"space-between"} w={"90%"} flexDirection={{base:"column",md:"row"}} gap={"5px"}>
        <Box w={{base:"90%",md:"60%"}}>
          <Image
            src="https://www.masaischool.com/images/footer/masai-logo-dark.svg"
            alt="Footer_logo"
          />
        </Box>
        <Flex
          justifyContent={"space-around"}
          w={{base:"90%",lg:"30%"}}
          color={"whiteAlpha.700"}
          alignItems={"center"}
          fontSize={{sm:"16px",md:"20px",lg:"20px"}}
        >
          <Text>Follow us:-</Text>

          <AiOutlineTwitter />

          <BiLogoFacebookCircle />

          <AiFillLinkedin />

          <AiFillInstagram />

          <AiFillGithub />

          <AiFillYoutube />
        </Flex>
      </Flex>

      <Divider />

      <Flex flexDirection={{base:"column",lg:"row"}}>
        <Box w={{base:"90%",lg:"65%"}} m={{base:"10px",md:"20px"}}>
          <Flex flexWrap={"wrap"} gap={"20px"}>
            <Box
              border={"2px solid white"}
              p={"5px"}
              borderRadius={"12px"}
              backgroundColor={"white"}
              color={"gray.800"}
            >
              Full Stack Web Development - Full Time
            </Box>
            <Box
              border={"2px solid white"}
              p={"5px"}
              borderRadius={"12px"}
              backgroundColor={"white"}
              color={"gray.800"}
            >
              Data Analytics - Full Time
            </Box>
            <Box
              border={"2px solid white"}
              p={"5px"}
              borderRadius={"12px"}
              backgroundColor={"white"}
              color={"gray.800"}
            >
              Mobile Development - Full Time
            </Box>
            <Box
              border={"2px solid white"}
              p={"5px"}
              borderRadius={"12px"}
              backgroundColor={"white"}
              color={"gray.800"}
            >
              Software Testing & Automation - Full Time
            </Box>
            <Box
              border={"2px solid white"}
              p={"5px"}
              borderRadius={"12px"}
              backgroundColor={"white"}
              color={"gray.800"}
            >
              Backend Development - Full Time
            </Box>
          </Flex>
          <Container as={Stack} maxW={{base:"100%",lg:"6xl"}} py={10} color={"whiteAlpha.700"}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
              <Stack align={"flex-start"}>
                <Box as="a" href={"#"}>
                  Success Stories
                </Box>
                <Box as="a" href={"#"}>
                  Our Team
                </Box>
                <Box as="a" href={"#"}>
                  Careers
                </Box>
                <Box as="a" href={"#"}>
                  Masai Blog
                </Box>
                <Box as="a" href={"#"}>
                  Talent Circle
                </Box>
              </Stack>

              <Stack align={"flex-start"}>
                <Box as="a" href={"#"}>
                  Hire From Us
                </Box>
                <Box as="a" href={"#"}>
                  Our Investors
                </Box>
                <Box as="a" href={"#"}>
                  Newsroom
                </Box>
                <Box as="a" href={"#"}>
                  Contact Us
                </Box>
                <Box as="a" href={"#"}>
                  Become Coach
                </Box>
              </Stack>

              <Stack align={"flex-start"}>
                <Box as="a" href={"#"}>
                  About Us
                </Box>
                <Box as="a" href={"#"}>
                  FAQ
                </Box>
                <Box as="a" href={"#"}>
                  Referral Program
                </Box>
                <Box as="a" href={"#"}>
                  Masai Learn
                </Box>
                <Box as="a" href={"#"}>
                  Industry Mentors
                </Box>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>

        <Box w={{base:"100%",lg:"25%"}} m={"auto"}>
          <Flex flexDirection={{base:"column"}} color={"whiteAlpha.700"}>
            <Box>
              <Text
                textAlign={"center"}
                w={"80%"}
                m={"20px auto"}
              >
                Connect with a growing community of learners
              </Text>
            </Box>
            <Box>
              <Button color={"teal"} mb={{base:"20px",lg:"0px"}} leftIcon={<BsTelegram />}>
                Join Our Telegram
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Divider />

      <Flex
        justifyContent={"space-between"}
        color={"whiteAlpha.700"}
        m={"10px auto"}
        flexDirection={{base:"column",md:"row"}}
      >
        <Box>
          <Text>© 2023 by Masai School | A Nolan Edutech Pvt Ltd Venture</Text>
        </Box>
        <Flex fontSize={"12px"} flexDirection={{base:"column",md:"row"}}>
          <Text as="a" href={"#"} textDecoration={"underline"}>
            Privacy Policies
          </Text>
          <Text p={"0px 5px"}>&</Text>
          <Text as="a" href={"#"} textDecoration={"underline"}>
            Terms & Conditions
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
