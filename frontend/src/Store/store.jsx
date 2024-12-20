import { useState } from "react";
import { create } from "zustand";


export const useStore = create((set) => ({
    // Add your state and actions here
	products: [],
	setProducts: (products) => set({ products }),

// method for creating a new product at the frontend
	createProduct: async (newProduct) => {
        if (!newProduct.name) {
            return { success: false, message: "Product name is required and must be a string." };
        }
        if (!newProduct.price) {
            return { success: false, message: "Price is required and must be a number." };
        }
        if (!newProduct.image) {
            return { success: false, message: "Image is required and must be a string." };
        }


		const res = await fetch("/api/products", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newProduct),
		});
		const data = await res.json();
		set((state) => ({ products: [...state.products, data.data] }));
        return { success: true, message: "Product created successfully." };
	},

// method for fetching the products from the database
	fetchProducts: async () =>{
		const res = await fetch("/api/products");
		const data = await res.json();
		set({ products: data.data});
	},

	// method for deleting a products at the frontend
	deleteProduct: async (pid) => {
		const res = await fetch(`/api/products/${pid}`, {
			method: "DELETE",
		});
		const data = await res.json();
		if (!data.success) return { success: false, message:data.message};

		// Updates the ui immediately
		set((state) => ({ products: state.products.filter((product) => product._id !== pid)}));
		return { success: true, message: "Product deleted successfully." };
	},

	// method for updating a product at the frontend
	// updateProduct: async (pid, updatedProduct) => {
	// 	const res = await fetch(`/api/products/${pid}`, {
	// 		method: "PUT",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify(updatedProduct),
	// 	});
	// 	const data = await res.json();
	// 	if (!data.success) return{ success:false, message:data.message};

	// 	set((state) =>  ({products: state.products.map((product) => product._id === pid ? data.data: product)}
	// 					));
	// }



	updateProduct: async (pid, updatedProduct) => {
		try {
			const res = await fetch(`/api/products/${pid}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedProduct),
			});
	
			if (!res.ok) {
				const errorData = await res.json();
				console.error("Update failed:", errorData.message);
				return { success: false, message: errorData.message || "Update failed." };
			}
	
			const data = await res.json();
	
			if (data.success) {
				// Correctly update the products array
				set((state) => ({
					products: state.products.map((product) =>
						product._id === pid ? { ...product, ...data.data } : product
					),
				}));
				return { success: true, message: "Product updated successfully." };
			} else {
				console.error("Update failed:", data.message);
				return { success: false, message: data.message || "Error updating product." };
			}
		} catch (error) {
			console.error("Unexpected error updating product:", error);
			return { success: false, message: "An unexpected error occurred." };
		}
	},
	
	
}));


	

