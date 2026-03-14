import styles from "./Header.module.scss"
import {Icon, Input} from "@components/ui";
import {useProducts} from "@/store";

export const Header = () => {
    const { setFilters, filters } = useProducts()

    const search = (value: string) => {
        setFilters({ search: value })
    }

    return (
        <div className={styles.header}>
            <div className="logo"></div>
            <div className={styles.search}>
                <Icon name="search" className={styles.searchIcon} />
                <Input
                    value={filters.search ?? ""}
                    className={styles.searchInput}
                    onChange={search}
                    placeholder="Искать на сайте"
                    type="text"
                />
            </div>
            <div className="info"></div>
        </div>
    )
}