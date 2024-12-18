import {
	Box,
	Container,
	Heading,
	VStack,
	Button,
	Input
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useStore } from "../Store/store";
import { toast } from "react-toastify";

function CreatePage() {

	const [newProduct, SetnewProduct] = useState({
		name: "",
		price: "",
		image: "",
	});

    const {createProduct} = useStore()

	// handleAddProduct function performs the operation of adding a new product to the product list 
	const handleAddProduct = async () => {
        console.log(newProduct)
        const { success, message } = await createProduct(newProduct);
		if(success){
			toast.success("Product added successfully", { //The toast notification
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
		}
		else {
			toast.error(`Error: ${message}`, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
		}  
		SetnewProduct({name:"",price:"",image:""}); // To reset the fields
	};

	return (
		<Container maxW={"container.sm"}>
			<VStack spaceY={8}>
				<Heading
					as={"h1"}
					size={"4xl"}
					textAlign={"center"}
					mb={8}
					fontFamily={"revert"}
					color={"honeydew"}
					fontWeight={"bold"}>
					Create New Product
				</Heading>
				<Box width={"1/2"} bg={"gray.800"} p={6} rounded={"lg"} shadow={"md"}>
					<VStack spaceY={4}>

						<Input
							placeholder='Product Name'
							border='0.5px solid'
							borderColor='#696969'
                            required
							name='name'
							value={newProduct.name}
							onChange={(e) =>
								SetnewProduct({ ...newProduct, name: e.target.value })
							}
						/>

						<Input
							placeholder='Price'
							border='0.5px solid'
							borderColor='#696969'
                            required
							name='price'
							type='number'
							value={newProduct.price}
							onChange={(e) =>
								SetnewProduct({ ...newProduct, price: e.target.value })
							}
						/>

						<Input
							placeholder='Image URL'
							border='0.5px solid'
							borderColor='#696969'
                            required
							name='image'
							value={newProduct.image}
							onChange={(e) =>
								SetnewProduct({ ...newProduct, image: e.target.value })
							}
						/>

						<Button
							bgGradient='to-r'
							gradientFrom={"#4169E1"}
							gradientTo={"#B0E0E6"}
							onClick={handleAddProduct}
							w='full'
							fontSize={"xl"}>
							Add Product
						</Button>

					</VStack>
				</Box>
			</VStack>
		</Container>
	);
}

export default CreatePage;
