import type { ProductFilter } from "../types";
export declare const useProducts: () => {
    products: import("../../api").Product[];
    filteredProducts: import("../../api").Product[];
    filters: ProductFilter;
    isLoading: boolean;
    categories: string[];
    priceRange: {
        max: number;
        min: number;
    };
    hasFilters: boolean;
    activeFiltersCount: number;
    setFilters: (newFilters: ProductFilter) => void;
    clearFilters: () => void;
    fetchProducts: () => void;
    isEmpty: boolean;
};
