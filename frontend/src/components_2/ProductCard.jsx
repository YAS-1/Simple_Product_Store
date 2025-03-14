import React, { useState } from "react";
import { Box, Heading, Text, HStack, Image, VStack, Button, Input} from "@chakra-ui/react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { MdDelete, MdUpdate } from 'react-icons/md';
import { useStore } from "../Store/store";
import { toast } from "react-toastify"


const ProductCard = ({ product }) => {

  const [ open, setOpen] = useState(false);

  const{ deleteProduct } = useStore();

  // runs the deleteProduct method in the frontend
  const handleDeleteProduct = async (pid) =>{
    const {success, message} = await deleteProduct(pid);

    if (!success){
      toast.error(`Error: ${message}`,{
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
        })
    }
    else{
      toast.success("Product deleted successfully",{
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
        })
    }
  }

  // runs the updateProduct in the frontend
  const [updatedProduct, setUpdatedProduct] = useState(product);  

  const { updateProduct } = useStore();

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);

    if (success) {
        toast.success("Product updated successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          });
        setOpen(false); // Close the dialog only on success
    } else {
      toast.error(`Error${message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    
    }
  };

	return (
		<Box
			shadow={"lg"}
			rounded={"lg"}
			overflow={"hidden"}
			transition={"all 0.3s"}
			bg={"blackAlpha.800"}
			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}>

			<Box>
				<Image
					src={product.image}
					alt={product.name}
					h={{ base: "12rem", md: "18rem" }}
					w={"full"}
					objectFit={"cover"}
				/>
			</Box>
        
			<Box padding={4} bg={"blackAlpha.600"}>

        <Heading as={"h3"} size={"md"} md={2}> {product.name} </Heading>
        <Text fontWeight={"bold"} fontSize={"xl"} md={4}> ${product.price} </Text>

        <HStack>
          <Button size={"2xs"} onClick={ () => handleDeleteProduct(product._id) }>< MdDelete/></Button>

          <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
            <DialogTrigger asChild>
              <Button size={"2xs"}>< MdUpdate/></Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Update Product</DialogTitle>
              </DialogHeader>
              <DialogBody>
                <VStack wordSpacing={4}>
                  <Input
                    placeholder='Product Name'
                    border='0.5px solid'
                    borderColor='#696969'
                    name='name'
                    value={updatedProduct.name}
                    onChange={(e) =>
                    setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                    }
                  />

                  <Input
                    placeholder='Price'
                    border='0.5px solid'
                    borderColor='#696969'
                    name='price'
                    type='number'
                    value={updatedProduct.price}
                    onChange={(e) =>
                    setUpdatedProduct({ ...updatedProduct, price: e.target.value })
                    }
                  />

                  <Input
                    placeholder='Image URL'
                    border='0.5px solid'
                    borderColor='#696969'
                    name='image'
                    value={updatedProduct.image}
                    onChange={(e) =>
                    setUpdatedProduct({ ...updatedProduct, image: e.target.value })
                    }
                  />
                </VStack>
              </DialogBody>
              <DialogFooter>
                <DialogActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogActionTrigger>
                <Button variant={"ghost"} onClick={ () => handleUpdateProduct(product._id, updatedProduct)}>Update</Button>
              </DialogFooter>
              <DialogCloseTrigger />
            </DialogContent>
          </DialogRoot>          
        </HStack>

			</Box>

		</Box>
	);
};

export default ProductCard;
