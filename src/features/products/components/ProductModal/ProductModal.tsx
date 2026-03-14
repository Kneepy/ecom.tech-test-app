import {Button, Icon, Modal, type ModalProps} from "@components/ui";
import styles from "./ProductModal.module.scss"
import type {Product} from "@/api";

interface Props extends ModalProps {
    product: Product
}

export const ProductModal = ({ onClose, isOpen, product }: Props) => {
    if (!product) return null

    return (
        <Modal onClose={onClose} isOpen={isOpen} className={styles.productModal}>
            <div className={styles.productMedia}>
                <div className={styles.media} style={{backgroundImage: `url(${product.image})`}}></div>
            </div>
            <div className={styles.productInfo}>
                <div className={styles.contentBox}>
                    <div className={styles.productTitle}>
                        <span className={styles.title}>{product.title}</span>
                    </div>
                    <div className={styles.productDescription}>
                        <div className={styles.title}>Описание</div>
                        <div className={styles.description}>{product.description}</div>
                    </div>
                </div>
                <Button className={styles.buyBtn}>{product.price} ₽</Button>
            </div>
            <Button className={styles.closeBtn} onClick={onClose}>
                <Icon name="close" className={styles.icon}/>
            </Button>
        </Modal>
    )
}