import React from "react";
import { Box, Heading, Text, HStack } from "@chakra-ui/react";
import { MdDelete, MdUpdate } from 'react-icons/md';

const ProductCard = ({ product }) => {

	return (
		<Box
			shadow={"lg"}
			rounded={"lg"}
			overflow={"hidden"}
			transition={"all 0.3s"}
			bg={"blackAlpha.800"}
			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}>

			<Box>
				{/* <Image
					src={product.image}
					alt={product.name}
					h={{ base: "12rem", md: "18rem" }}
					w={"full"}
					objectFit={"cover"}
				/> */}
        <img src={product.image} alt={product.name} />
			</Box>
        
			<Box padding={4} bg={"blackAlpha.600"}>

        <Heading as={"h3"} size={"md"} md={2}> {product.name} </Heading>
        <Text fontWeight={"bold"} fontSize={"xl"} md={4}> ${product.price} </Text>

        <HStack>
          < MdUpdate/>
          < MdDelete/>
        </HStack>

			</Box>

		</Box>
	);
};

export default ProductCard;
