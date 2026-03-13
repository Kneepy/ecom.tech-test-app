import {useStore} from "@/store";
import {useCallback, useMemo} from "react";
import type {ProductFilter} from "@store/types";

export const useProducts = () => {
    const products = useStore(state => state.products);
    const filteredProducts = useStore(state => state.filteredProducts);
    const filters = useStore(state => state.filters);
    const isLoading = useStore(state => state.isLoading);

    const setFilters = useStore(state => state.setFilters);
    const clearFilters = useStore(state => state.clearFilters);
    const fetchProducts = useStore(state => state.fetchProducts);
    const getCategories = useStore(state => state.getCategories);
    const getPriceRange = useStore(state => state.getPriceRange);

    const updateFilters = useCallback(async (newFilters: Partial<ProductFilter>) => {
        setFilters(newFilters);
    }, [setFilters]);

    const categories = useMemo(() => getCategories(), [getCategories, products]);
    const priceRange = useMemo(() => getPriceRange(), [getPriceRange, products]);

    const hasFilters = useMemo(() => {
        return !!(
            filters.category ||
            filters.search ||
            filters.minPrice ||
            filters.maxPrice ||
            filters.sortBy
        );
    }, [filters]);

    const activeFiltersCount = useMemo(() => {
        let count = 0;
        if (filters.category) count++;
        if (filters.search) count++;
        if (filters.minPrice) count++;
        if (filters.maxPrice) count++;
        if (filters.sortBy) count++;
        return count;
    }, [filters]);

    return {
        products,
        filteredProducts,
        filters,
        isLoading,

        categories,
        priceRange,
        hasFilters,
        activeFiltersCount,

        setFilters: updateFilters,
        clearFilters,
        fetchProducts,
        isEmpty: filteredProducts.length === 0,
    };
};