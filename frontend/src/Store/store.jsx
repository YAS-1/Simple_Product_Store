import { create } from "zustand";


export const useStore = create((set) => ({
    // Add your state and actions here
	products: [],
	setProducts: (products) => set({ products }),

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
}));
