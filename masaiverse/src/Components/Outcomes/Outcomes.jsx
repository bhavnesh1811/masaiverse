import React from 'react'
import {Stack,Heading,Flex} from "@chakra-ui/react"
import SideButtons from './SideButtons'

const Outcomes = () => {
  return (
    <Stack mt={{md:"20px",base:"10px"}} w={{md:"80%",base:"90%"}} margin="auto">
        <Heading size='xl' fontSize={{md:"40px",base:"18px"}} textAlign="center">Driven By <span style={{fontWeight:"bold",color:"red"}}>Outcomes</span> yellow-vectorTo Launch Your Career In Tech</Heading>
        <Flex>
          <SideButtons/>
        </Flex>
    </Stack>
  )
}

export default Outcomes

 