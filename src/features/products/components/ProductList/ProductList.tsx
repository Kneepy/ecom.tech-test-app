import styles from "./ProductList.module.scss"
import type { Product as ProductType } from "@/api";
import {useState} from "react";
import { ProductCard } from "../Product";
import {ProductModal} from "@features/products/components";
import {useProducts} from "@/store";

export const ProductList = () => {
    const [isOpenProductModal, setIsOpenProductModal] = useState(false);
    const [currentProduct, setCurrentProduct] = useState<ProductType | null>(null);

    const { filteredProducts } = useProducts()

    const openProductModal = (product: ProductType) => {
        setIsOpenProductModal(true);
        setCurrentProduct(product)
    }
    const closeProductModal = () => {
        setIsOpenProductModal(false)
    }

    return (
        <div className={styles.productList}>
            {
                filteredProducts.map((product) =>
                    <ProductCard
                        onClick={() => openProductModal(product)}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        key={product.id}
                    />
                )
            }
            { currentProduct &&
                <ProductModal isOpen={isOpenProductModal} onClose={closeProductModal} product={currentProduct}/>
            }
        </div>
    )
}