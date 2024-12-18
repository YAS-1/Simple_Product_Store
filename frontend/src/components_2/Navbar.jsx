import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import { FaPlusSquare } from "react-icons/fa"


function Navbar() {

  return (
    <Container maxWidth={"1104px"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={["column", "row"]}>

            <Text
                fontSize={['lg','lg', "2xl"]}
                fontFamily={"heading"}
                fontWeight={"bold"}
                textTransform="uppercase"
                textAlign={"center"}
                bgGradient= "to-r" gradientFrom={"#0000CD"} gradientTo={"#191970"}
                bgClip= "text"
            >

                <Link to={"/"}>Products View</Link>

            </Text>

            <HStack wordSpacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <FaPlusSquare size={"20"}/>
                </Link>
            </HStack>
        </Flex>
    </Container>
  )
}

 
export default Navbar