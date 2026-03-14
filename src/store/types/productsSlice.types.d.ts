import type { Product } from "@/api";
export interface ProductFilter {
    categories?: string[];
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    sortBy?: "price" | "title";
    sortOrder?: "asc" | "desc";
}
export interface ProductsState {
    filteredProducts: Product[];
    products: Product[];
    filters: ProductFilter;
    isLoading: boolean;
}
export interface ProductsActions {
    fetchProducts: () => void;
    setFilters: (filters: ProductFilter) => void;
    clearFilters: () => void;
    applyFilters: () => void;
    getCategories: () => string[];
    getPriceRange: () => {
        max: number;
        min: number;
    };
}
export interface ProductsSlice extends ProductsState, ProductsActions {
}
