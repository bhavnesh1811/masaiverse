import React from 'react'
import {Stack,Image} from "@chakra-ui/react"

const Banner = () => {
  return (
    <Stack width="100%">
        <Image src='https://masai-website-images.s3.ap-south-1.amazonaws.com/desktop_3.webp' alt='banner' m="0px" height={{md:"300px",base:"150px"}} width="100vw" />
    </Stack>
  )
}

export default Banner