import {MainLayout} from "@/layouts";
import {ProductList} from "@features/products/components";
import styles from "./HomePage.module.scss"
import {useProducts} from "@/store";
import {useEffect} from "react";

export const HomePage = () => {
    const { products, fetchProducts } = useProducts()

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <MainLayout>
            <div className={styles.content}>
                <ProductList products={products} />
            </div>
        </MainLayout>
    )
}