import styles from "./ProductList.module.scss"
import type { Product as ProductType } from "@/api";
import {useCallback, useState} from "react";
import { ProductCard } from "../Product";
import {ProductModal} from "@features/products/components";
import {useProducts} from "@/store";

export const ProductList = () => {
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

    const { filteredProducts } = useProducts()

    const openProductModal = useCallback((product: ProductType) => {
        setSelectedProduct(product)
    }, [])
    const closeProductModal = useCallback(() => {
        setSelectedProduct(null)
    }, [])

    return (
        <div className={styles.productList}>
            {
                filteredProducts.map((product) =>
                    <ProductCard
                        onClick={() => openProductModal(product)}
                        product={product}
                        key={product.id}
                    />
                )
            }
            { selectedProduct &&
                <ProductModal isOpen={!!selectedProduct} onClose={closeProductModal} product={selectedProduct}/>
            }
        </div>
    )
}