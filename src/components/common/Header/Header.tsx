import styles from "./Header.module.scss"
import {Icon} from "@components/ui";
import {useProducts} from "@/store";
import type {ChangeEvent} from "react";

export const Header = () => {
    const { setFilters, filters } = useProducts()

    const search = (e: ChangeEvent<HTMLInputElement>) => {
        setFilters({ search: e.target.value })
    }

    return (
        <div className={styles.header}>
            <div className="logo"></div>
            <div className={styles.search}>
                <Icon name="search" className={styles.searchIcon} />
                <input
                    className={styles.searchInput}
                    value={filters.search ?? ""}
                    onChange={search}
                    placeholder="Искать на сайте"
                    type="text"
                />
            </div>
            <div className="info"></div>
        </div>
    )
}