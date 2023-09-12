import React from 'react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'

const Course = () => {
  return (
    <Stack mt={{md:"35px",base:"145px"}}>
        <Heading size='lg' fontSize={{md:"50px",base:"25px"}} textAlign="center">Our Courses</Heading>
        <Heading  as='h2' size='xl' fontSize={{base:"20px"}} margin={{md:"10px",base:"5px"}} textAlign="center">Practice-Based Learning Tracks, <span style={{fontWeight:"bold",color:"red"}}>Supercharged By A.I.</span> </Heading>

        <Box width={{lg:"70%",md:"90%",base:"90%"}} margin="auto" display='flex' flexDirection={{md:"row",base:"column"}} justifyContent="space-around">
            <VStack width={{lg:"35%",md:"45%",base:"100%"}} borderRadius="20px" paddingBottom="10px"   boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" alignItems="left" margin={{base:"10px 0px"}}>
                <Box backgroundColor="#d9abff" width="100%" height="200px" borderTopLeftRadius ="20px" borderTopRightRadius="20px">
                    <Image src='https://masai-website-images.s3.ap-south-1.amazonaws.com/full_stack1_329d6b5595.png' alt='image' display="block" margin="auto" width="50%" height="80%" />
                </Box>

                <Box padding="10px" alignItems="start" textAlign="start">
                    <Heading margin="5px" fontSize={{base:"22px"}}>Full Stack Web Development</Heading>
                    <Text opacity="0.6" fontSize="18px" margin="5px">Become job-ready in 30 weeks</Text>
                    <hr/>

                    <Box display="flex" >
                        <CheckCircleIcon margin="10px" />
                        <Text margin="5px"><span style={{fontWeight:"bold"}}> Opportunities:</span> Full Stack Developer, Software Engineer & much more.</Text>
                    </Box>

                    <Box display="flex">
                        <CheckCircleIcon margin="10px"/>
                        <Text margin="5px">100% live learning with expert instructors.</Text>
                    </Box>

                    <Box display="flex" >
                        <CheckCircleIcon margin="10px"/>
                        <Text margin="5px">Pay After Placement</Text>
                    </Box>

                    <Button colorScheme='red' size='lg' letterSpacing="1px" display="block" margin="auto">VIEW DETAILS</Button>
                </Box>
            </VStack>

            <VStack width={{lg:"35%",md:"45%",base:"100%"}} borderRadius="20px" paddingBottom="10px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" alignItems="left" margin={{base:"10px 0px"}} >
                <Box backgroundColor="#ffc27f" width="100%" height="200px" borderTopLeftRadius ="20px" borderTopRightRadius="20px">
                    <Image src='https://masai-website-images.s3.ap-south-1.amazonaws.com/backend_ea129d404e.png' alt='image' width="50%" display="block" margin="auto"  height="80%" />
                </Box>

                <Box padding="10px" alignItems="start" textAlign="start">
                    <Heading margin="5px" fontSize={{base:"22px"}}>Backend Development</Heading>
                    <Text opacity="0.6" fontSize="18px" margin="5px">Become job-ready in 35 weeks</Text>
                    <hr/>

                    <Box display="flex" >
                        <CheckCircleIcon margin="10px" />
                        <Text margin="5px"><span style={{fontWeight:"bold"}}> Opportunities:</span> Backend Web Developer, API developer & much more.</Text>
                    </Box>

                    <Box display="flex">
                        <CheckCircleIcon margin="10px"/>
                        <Text margin="5px">100% live learning with expert instructors.</Text>
                    </Box>

                    <Box display="flex" >
                        <CheckCircleIcon margin="10px"/>
                        <Text margin="5px">Pay After Placement</Text>
                    </Box>

                    <Button colorScheme='red' size='lg' letterSpacing="1px" display="block" margin="auto">VIEW DETAILS</Button>
                </Box>
            </VStack>
        </Box>

        <Button colorScheme='red' size="lg" letterSpacing="1px" display="block" margin="25px auto">VIEW ALL COURSES</Button>
    </Stack>
  )
}

export default Course



