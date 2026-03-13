import {Modal, type ModalProps} from "@components/ui";
import styles from "./ProductModal.module.scss"
import type {Product} from "@/api";

interface Props extends ModalProps {
    product: Product
}

export const ProductModal = ({ onClose, isOpen, product }: Props) => {
    if (!product) return null

    return (
        <>
            <Modal onClose={onClose} isOpen={isOpen}>
                <div className={styles.productModal}>
                    <div className={styles.preview} style={{backgroundImage: `url(${product.image})`}}></div>
                    <div className={styles.title}>{product.title}</div>
                    <div className={styles.price}>{product.price}</div>
                </div>
            </Modal>
        </>
    )
}