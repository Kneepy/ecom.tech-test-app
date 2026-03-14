import type {StateCreator} from "zustand/vanilla";
import type {ProductFilter, ProductsSlice, ProductsState} from "@store/types";
import {MockProductApi} from "@/api";
import {applyFiltersToProducts} from "@store/utils/productsSlice.utils.ts";

const initialState: ProductsState = {
    filteredProducts: [],
    products: [],
    filters: {},
    isLoading: false
}

export const createProductSlice: StateCreator<ProductsSlice, [], [], ProductsSlice> = (set, get) => ({
    ...initialState,
    async fetchProducts() {
        try {
            set({ isLoading: true })
            const products = await MockProductApi.getAll()
            const { filters } = get()
            const filteredProducts = applyFiltersToProducts(products, filters)

            set({
                products,
                filteredProducts,
                isLoading: false
            })

            return products
        } catch (e) {
            console.log(e)
            set({ isLoading: false })
        }
    },
    setFilters(filters: ProductFilter) {
        const { filters: currentFilters, products } = get()
        const newFilters = { ...currentFilters, ...filters }
        const filteredProducts = applyFiltersToProducts(products, newFilters)

        set({
            filters: newFilters,
            filteredProducts
        })
    },
    clearFilters() {
        const { products } = get()
        const filteredProducts = applyFiltersToProducts(products, {})
        set({ filters: {}, filteredProducts })
    },

    getCategories() {
        const { products } = get()
        return [...new Set(products.map(p => p.category))]
    },

    getPriceRange() {
        const { products } = get()
        const prices = products.map(p => p.price)

        return {
            min: Math.min(...prices),
            max: Math.max(...prices)
        }
    }
})