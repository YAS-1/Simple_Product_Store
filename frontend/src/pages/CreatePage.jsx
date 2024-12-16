import { Box, Container, Heading, VStack, Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react'

function CreatePage() {

    const [newProduct, SetnewProduct] = useState({
        Product_name: "",
        price: "",
        image: "",
    });

    const handleAddProduct = () => {
        console.log(newProduct);
    }

    return (
        <Container maxW={"container.sm"}>
            <VStack spaceY={8}>

                <Heading as={"h1"} size={"4xl"} textAlign={"center"} mb={8} fontFamily={"revert"} color="Highlight" fontWeight={"bold"}>
                    Create New Product
                </Heading>
                <Box
                    width={"full"}
                    bg={"gray.800"}
                    p={6} rounded={"lg"} shadow={"md"}
                >
                    <VStack spaceY={4}>
                    
                        <Input
                          placeholder = "Product Name"
                          border= "0.5px solid"
                          borderColor="#696969"
                          name = "Product_name"
                          value = {newProduct.Product_name}
                          onChange = {(e) => SetnewProduct({...newProduct, Product_name: e.target.value})}
                        />

                        <Input
                          placeholder = "Price"
                          border= "0.5px solid"
                          borderColor="#696969"
                          name = "price"
                          type='number'
                          value = {newProduct.price}
                          onChange = {(e) => SetnewProduct({...newProduct, price: e.target.value})}
                        />

                        <Input
                          placeholder = "Image URL"
                          border= "0.5px solid"
                          borderColor="#696969"
                          name = "image"
                          value = {newProduct.image}
                          onChange = {(e) => SetnewProduct({...newProduct, image: e.target.value})}
                        />

                        <Button bgGradient= "to-r" gradientFrom={"#4169E1"} gradientTo={"#B0E0E6"} onClick = {handleAddProduct} w="full" fontSize={"xl"}>Add Product</Button>
                    </VStack>
                </Box>

            </VStack>
        </Container>
    );
}

export default CreatePage