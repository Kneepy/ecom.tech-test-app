import {Button, Icon, Input, Modal, type ModalProps} from "@components/ui";
import styles from "./FilterModal.module.scss"
import {useProducts} from "@/store";

export const FilterModal = ({ onClose, isOpen }: ModalProps) => {
    const { filters, setFilters } = useProducts()

    const setMinPrice = (value: string) => {
        if (value === "") {
            setFilters({ minPrice: undefined })
            return
        }
        if (isNaN(Number(value))) {
            return
        }

        setFilters({ minPrice: Number(value) })
    }
    const setMaxPrice = (value: string) => {
        if (value === "") {
            setFilters({ maxPrice: undefined })
            return
        }
        if (isNaN(Number(value))) {
            return
        }

        setFilters({ maxPrice: Number(value) })
    }

    return (
        <Modal onClose={onClose} isOpen={isOpen} className={styles.filterModal}>
            <div className={styles.title}>
                Фильтры

                <Button className={styles.closeBtn} onClick={onClose}>
                    <Icon name="close" className={styles.icon}/>
                </Button>
            </div>

            <div className={styles.filters}>
                <div className={styles.filter}>
                    <div className={styles.filterTitle}>Цена</div>
                    <div className={styles.filterContent}>
                        <Input
                            value={`${filters.minPrice ?? ""}`}
                            onChange={(v) => setMinPrice(v)}
                            className={styles.rageInput}
                            placeholder="От"
                        />
                        <Input
                            value={`${filters.maxPrice ?? ""}`}
                            onChange={(v) => setMaxPrice(v)}
                            className={styles.rageInput}
                            placeholder="До"
                        />
                    </div>
                </div>
            </div>
        </Modal>
    )
}