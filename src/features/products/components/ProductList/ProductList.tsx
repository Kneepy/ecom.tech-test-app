import styles from "./ProductList.module.scss"
import type { Product as ProductType } from "@/api";
import {useMemo, useState} from "react";
import { ProductCard } from "../Product";
import {ProductModal} from "@features/products/components";
import {useProducts} from "@/store";

interface Props {
    columns?: number;
    gap?: number | string;
}

export const ProductList = ({ columns = 5, gap = 20 }: Props) => {
    const [isOpenProductModal, setIsOpenProductModal] = useState(false);
    const [currentProduct, setCurrentProduct] = useState<ProductType | null>(null);

    const { filteredProducts } = useProducts()

    const style = useMemo(() => ({
        gap: typeof gap === "string" ? gap : `${gap}px`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`
    }), [columns, gap]);

    const openProductModal = (product: ProductType) => {
        setIsOpenProductModal(true);
        setCurrentProduct(product)
    }
    const closeProductModal = () => {
        setIsOpenProductModal(false)
    }

    return (
        <div className={styles.productList} style={style}>
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