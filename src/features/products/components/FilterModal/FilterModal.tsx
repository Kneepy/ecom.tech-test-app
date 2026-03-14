import {Button, Icon, Input, Modal, type ModalProps} from "@components/ui";
import styles from "./FilterModal.module.scss"
import {useProducts} from "@/store";
import {memo, useCallback} from "react";

export const FilterModal = memo(({ onClose, isOpen }: ModalProps) => {
    const { filters, setFilters } = useProducts()

    const setPriceFilter = useCallback((key: "minPrice" | "maxPrice", value: string) => {
        if (value === "") {
            setFilters({ [key]: undefined })
            return
        }
        const num = Number(value)
        if (!isNaN(num)) {
            setFilters({ [key]: num })
        }
    }, [setFilters])

    const handleMinPrice = useCallback((v: string) => setPriceFilter("minPrice", v), [setPriceFilter])
    const handleMaxPrice = useCallback((v: string) => setPriceFilter("maxPrice", v), [setPriceFilter])

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
                            onChange={handleMinPrice}
                            className={styles.rageInput}
                            placeholder="От"
                        />
                        <Input
                            value={`${filters.maxPrice ?? ""}`}
                            onChange={handleMaxPrice}
                            className={styles.rageInput}
                            placeholder="До"
                        />
                    </div>
                </div>
            </div>
        </Modal>
    )
})