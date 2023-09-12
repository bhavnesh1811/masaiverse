import React from 'react'
import {Stack,Image} from "@chakra-ui/react"

const Banner = () => {
  return (
    <Stack>
        <Image src='https://masai-website-images.s3.ap-south-1.amazonaws.com/desktop_3.webp' alt='banner' height={{md:"300px",base:"150px"}} />
    </Stack>
  )
}

export default Banner