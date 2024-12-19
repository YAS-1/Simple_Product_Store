import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { Container, VStack, Text, SimpleGrid} from "@chakra-ui/react"
import { useStore } from '../Store/store'
import ProductCard from "../components_2/ProductCard.jsx"

function HomePage() {

  const { fetchProducts, products } = useStore();

  useEffect(() => {
    fetchProducts();
    }, [fetchProducts]);
    console.log("products", products)

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>

        <Text
          fontSize={"xl"}
          fontWeight={"bold"}
          bgGradient="to-r" gradientFrom={"blue.600"} gradientTo={"cyan.900"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products 🚀
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          gap={"40px"}
          width={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </SimpleGrid>

        <Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
          No Products to display 😢     
          <Link to={"/create"}>
            <Text color={"blue.500"} _hover={{textDecoration:"underline", color:"cyan.900"}} as={"span"}>
              Create a Product
            </Text>
          </Link>
        </Text>

      </VStack>
    </Container>
  )
}

export default HomePage