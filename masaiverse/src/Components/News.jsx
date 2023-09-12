import React from 'react'
import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'

const News = () => {
  return (
    <Stack m={{md:"25px",base:"15px"}}>
        <Heading size='lg' fontSize={{md:"40px",base:"20px"}} textAlign="center">Masai In <span style={{color:"red"}}>News</span></Heading>
        <Stack display="flex" width="90%" margin="auto" flexDirection={{md:"row",base:"column"}}>
            <Box boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" margin="10px">
                <Image src='https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Article_Prateek_Shukla_Gen_AI_92324e2d6b.jpeg' alt='img1' height="250px" width={"600px"} />
                <Text fontSize={{md:"22px",base:"15px"}} fontWeight="bold" m="12px">Empowering Education Through GenAI</Text>
            </Box>

            <Box boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" margin="10px">
                <Image src='https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thungy_1_420b226e5b.webp' alt='img1'  height="250px" width={"600px"}/>
                <Text fontSize={{md:"22px",base:"15px"}} fontWeight="bold" m="12px">Masai School targets fivefold revenue growth in three years</Text>
            </Box>

            <Box boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" margin="10px">
                <Image src='https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thingy_2_f2c52e6fcf.webp' alt='img1'  height="250px" width={"600px"} objectFit={"cover"}/>
                <Text fontSize={{md:"22px",base:"15px"}} fontWeight="bold" m="12px">Beyond Degrees: Embracing Alternative Credentialing and Micro-learning in Tech Recruitment</Text>
            </Box>
        </Stack>
    </Stack>
  )
}

export default News