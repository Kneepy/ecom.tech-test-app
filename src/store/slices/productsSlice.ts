import type {StateCreator} from "zustand/vanilla";
import type {ProductFilter, ProductsSlice, ProductsState} from "@store/types";
import {ProductApi} from "@/api";

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
            const products = await ProductApi.getAll()

            set({
                products,
                isLoading: false
            })
            get().applyFilters()

            return products
        } catch (e) {
            console.log(e)
        }
    },
    setFilters(filters: ProductFilter) {
        const currentFilters = get().filters
        set({
            filters: { ...currentFilters, ...filters },
        })

        get().applyFilters()
    },
    clearFilters() {
        set({ filters: {} })

        get().applyFilters()
    },
    applyFilters() {
        const { filters, products } = get();

        const filtered = products.filter(product => {
            if (filters.categories && !filters.categories.includes(product.category)) {
                return false
            }

            if (filters.search) {
                const searchLower = filters.search.toLowerCase()
                const titleMatch = product.title.toLowerCase().includes(searchLower)
                const descriptionMatch = product.description.toLowerCase().includes(searchLower)

                if (!titleMatch && !descriptionMatch) return false
            }

            if (filters.minPrice !== undefined && product.price < filters.minPrice) {
                return false;
            }
            if (filters.maxPrice !== undefined && product.price > filters.maxPrice) {
                return false;
            }

            return true
        })

        const sorted = filtered.sort((a, b) => {
            let comparison = 0;

            if (filters.sortBy === 'price') {
                comparison = a.price - b.price;
            } else if (filters.sortBy === 'title') {
                comparison = a.title.localeCompare(b.title);
            }

            return filters.sortOrder === 'asc' ? comparison : -comparison;
        })

        set({ filteredProducts: sorted })
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