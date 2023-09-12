import React,{useState} from "react";
import {Box,Flex,Button} from "@chakra-ui/react"
import SideImgs from "./SideImgs";

const SideButtons = () => {
  const [status,setStatus]=useState(1);

  const handleStatus=(a)=>{
    setStatus(a);
  }

  return(
    <Box 
      height={"auto"}
      display="flex"
      margin={"auto"}
      mt={{md:"15px"}}
      alignItems={"center"}
      justifyContent={"space-around"}
      flexDirection={{md:"column",base:"row"}}
    >
      <Flex
           width={"100%"}
           alignItems={"center"}
           flexDirection={{md:"row",base:"column"}}
           justifyContent={{md:"space-between",base:"center"}}
           overflow={"hidden"}
           borderRadius={"10px"}
           position={"relative"}
        >
        <Flex
          width={"35%"}
          padding="5px"
          alignItems={"center"}
          justifyContent={{md:"space-between",base:"center"}}
          backgroundColor={"white"}
          flexDirection={{md:"column",base:"row"}}
          overflow={"hidden"}
          borderRadius={"10px"}
          position={"relative"}
          >
            <Button size={"md"} w="100%" m={"10px"}  h={"20px"} color={"black"}  _hover={{color:"#ed3d5f",borderColor:"#ed3d5f", border:"1px solid #ed3d5f"}} 
              _focus={{color:"#ed3d5f",borderColor:"#ed3d5f", border:"1px solid #ed3d5f"}} border={0.8} p={10} borderRadius={15} 
              fontSize={"18px"} fontWeight={700} colorScheme={status===1?"#ed3d5f":"gray"}  onClick={()=>handleStatus(1)}>
              Career Launch
            </Button>

            <Button size={"md"} w="100%" m={"10px"}  h={"20px"} color={"black"}  _hover={{color:"#ed3d5f",borderColor:"#ed3d5f", border:"1px solid #ed3d5f"}} 
              _focus={{color:"#ed3d5f",borderColor:"#ed3d5f", border:"1px solid #ed3d5f"}} border={0.8} p={10} borderRadius={15} 
              fontSize={"18px"} fontWeight={700} colorScheme={status===1?"#ed3d5f":"gray"} onClick={()=>handleStatus(2)}>
              Nurture Ambition
            </Button>

            <Button size={"md"} w="100%" m={"10px"}  h={"20px"} color={"black"}  _hover={{color:"#ed3d5f",borderColor:"#ed3d5f", border:"1px solid #ed3d5f"}} 
              _focus={{color:"#ed3d5f",borderColor:"#ed3d5f", border:"1px solid #ed3d5f"}} border={0.8} p={10} borderRadius={15} 
              fontSize={"18px"} fontWeight={700} colorScheme={status===1?"#ed3d5f":"gray"} onClick={()=>handleStatus(3)}>
              Practice Based
            </Button>

            <Button size={"md"} w="100%" m={"10px"}  h={"20px"} color={"black"} _hover={{color:"#ed3d5f",borderColor:"#ed3d5f", border:"1px solid #ed3d5f"}} 
              _focus={{color:"#ed3d5f",borderColor:"#ed3d5f", border:"1px solid #ed3d5f"}} border={0.8} p={10} borderRadius={15} 
              fontSize={"18px"} fontWeight={700} colorScheme={status===1?"#ed3d5f":"gray"} onClick={()=>handleStatus(4)}>
              Industry Readiness
            </Button>

            <Button size={"md"} w="100%" m={"10px"}  h={"20px"} color={"black"}  _hover={{color:"#ed3d5f",borderColor:
              "#ed3d5f", border:"1px solid #ed3d5f"}} _focus={{color:"#ed3d5f",borderColor:"#ed3d5f", border:"1px solid #ed3d5f"}} border={0.8} p={10} 
              borderRadius={15} fontSize={"18px"} fontWeight={700} colorScheme={status===1?"#ed3d5f":"gray"} onClick={()=>handleStatus(5)}>
              Holistic Development
            </Button>

          </Flex>

          <Box width={{md:"60%",base:"90%"}} height={"auto"} >
            <SideImgs a={status}/>
          </Box>

        </Flex>  
    </Box>
  );
};

export default SideButtons;
