import React from 'react'
import {Box,Image} from "@chakra-ui/react"


const SideImgs = ({a}) => {
  const data=["","https://i.ibb.co/Y3JQZnM/first.png","https://i.ibb.co/DtWkgF4/second.png","https://i.ibb.co/xF62KSy/third.png","https://i.ibb.co/nzg6wwD/fourth.png","https://www.masaischool.com/images/new-homepage/outcome/holistic-outcome.png"]
  return (
      <Box width="100%" overflow="hidden" position="relative" padding="10px">
         <Image src={data[a]} alt="image" height={{md:"500px",base:"300px"}} width={{md:"90%",base:"90%"}}/>
      </Box>
  )
}

export default SideImgs