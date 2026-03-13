import {useProducts} from "@/store";
import {Filter} from "@features/products/components";
import styles from "./FilterList.module.scss"

export const FilterList = () => {
    const { categories, filters, setFilters } = useProducts()

    const selectCategory = (category: string) => {
        const currentCategories = Array.isArray(filters.categories) ? filters.categories : [] as string[]

        if (currentCategories.includes(category)) {
            setFilters({ categories: currentCategories.filter(c => c !== category) })
            return
        }

        currentCategories.push(category)
        setFilters({ categories: currentCategories })
    }

    return (
        <div className={styles.filterList}>
            {
                categories.map((category, index) => (
                    <Filter onClick={() => selectCategory(category)} text={category} key={index} />
                ))
            }
        </div>
    )
}