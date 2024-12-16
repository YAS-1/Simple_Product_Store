
import { create } from "zustand";

export const useStore = create((set) => ({
    // your state here
    products: [],
    // your actions here
    setProducts: (products) => set({ products }),
}));