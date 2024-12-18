import { Box, Image, Heading, Text, HStack} from '@chakra-ui/react';
import { MdDelete, MdUpdate } from 'react-icons/md';

const ProductCard = ({product}) => {
  return (
    <Box
    shadow={"lg"}
    rounded={"lg"}
    overflow={"hidden"}
    transition={"all 0.3s"}
    _hover={{ transform: "translateY(-5px)", shadow: "xl"}}
    >
        <Image src={product.image} alt={product.name} h={48} w={"full"} objectFit={"cover"}/>

        <Box padding={4}>
            <Heading as={"h3"} size={"md"} md={2}> {product.name} </Heading>

            <Text fontWeight={"bold"} fontSize={"xl"} color={"GrayText"} md={4}> ${product.price} </Text>

            <HStack wordSpacing={2}>
                < MdUpdate/>
                < MdDelete/>
            </HStack>
        </Box>

    </Box>
  )
};

export default ProductCard;