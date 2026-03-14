import {useProducts} from "@/store";
import {Filter, FilterModal} from "@features/products/components";
import styles from "./FilterList.module.scss"
import {useState} from "react";
import {Icon} from "@components/ui";

export const FilterList = () => {
    const [isOpenFilterModal, setIsOpenFilterModal] = useState(false)

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
    const categoryIsActive = (category: string) => filters.categories?.includes(category) ?? false
    const openFilterModal = () => setIsOpenFilterModal(true)
    const closeFilterModal = () => setIsOpenFilterModal(false)

    return (
        <div className={styles.filterList}>
            <Filter onClick={openFilterModal}>
                <Icon name="page_info" className={styles.openFilters} />
            </Filter>

            {
                categories.map((category, index) => (
                    <Filter onClick={() => selectCategory(category)} key={index} active={categoryIsActive(category)}>
                        { category }
                    </Filter>
                ))
            }

            <FilterModal isOpen={isOpenFilterModal} onClose={closeFilterModal} />
        </div>
    )
}