import {MainLayout} from "@/layouts";
import {ProductList, FilterList} from "@features/products/components";
import styles from "./HomePage.module.scss"
import {useProducts} from "@/store";
import {useEffect} from "react";

export const HomePage = () => {
    const { fetchProducts } = useProducts()

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    return (
        <MainLayout>
            <div className={styles.content}>
                <FilterList />
                <ProductList />
            </div>
        </MainLayout>
    )
}