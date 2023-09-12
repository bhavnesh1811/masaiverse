import React from 'react'
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'

const Outcome = () => {
  return (
    <Box display="flex" flexDirection={{md:"row",base:"column"}} width="90%" padding="10px" margin="10px auto" justifyContent="space-evenly">
      <Box width={{md:"50%",base:"100%"}} textAlign="left" padding="10px" mt={{md:"60px",base:"20px"}}>
          <Heading size='lg' fontSize={{md:"50px",base:"25px"}} margin="10px 0px">Realise Your Potential With <span style={{color:"red"}}>Assured Outcomes</span> Delivered.</Heading>
          <Text fontSize="22px">India’s only outcome-based career institute. Enter the tech workforce industry-ready.</Text>
          <Button colorScheme='red' size="lg" letterSpacing="1px" display="block" margin="25px auto">GET YOUR DREAM JOB</Button>
      </Box>


      <Box padding="10px" marginLeft="10px">
          <Box position="relative">
            <Image src='https://www.masaischool.com/images/new-homepage/banner-student-image1.webp' alt="student-image" />

            <Box position="absolute" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" top="255px" left={{md:"-175px",base:"0px"}} bgColor="#E8E8E8" borderRadius="12px" height="auto" width={{md:"400px",base:"310px"}} padding="12px" >
              <Text fontWeight="bold">" I liked that every thing is taught in a structured manner, and there is no spoon feeding. That helps us learn by ourself when we do. "</Text>
              <Text margin="10px" fontWeight="bold">Harshit Tirpathi</Text>
              <Image src='https://www.masaischool.com/images/new-homepage/company-logo1.svg' alt="company-logo" display="block" margin="auto" />
            </Box>
          </Box>
      </Box>
    </Box>
  )
}

export default Outcome