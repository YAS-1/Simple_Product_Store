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
	}
}));


	

