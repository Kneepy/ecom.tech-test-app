import {Product} from "@/api";
import {ProductFilter} from "@store/types";

export const applyFiltersToProducts = (products: Product[], filters: ProductFilter): Product[] => {
    const filtered = products.filter(product => {
        console.log(filters)
        if (filters.categories && !filters.categories.includes(product.category) && filters.categories?.length !== 0) {
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

    return filtered.sort((a, b) => {
        let comparison = 0;

        if (filters.sortBy === 'price') {
            comparison = a.price - b.price;
        } else if (filters.sortBy === 'title') {
            comparison = a.title.localeCompare(b.title);
        }

        return filters.sortOrder === 'asc' ? comparison : -comparison;
    })
}