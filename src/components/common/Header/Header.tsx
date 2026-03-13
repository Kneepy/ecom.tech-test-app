import styles from "./Header.module.scss"
import {Icon} from "@components/ui";

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className="logo"></div>
            <div className={styles.search}>
                <Icon name="search" className={styles.searchIcon} />
                <input className={styles.searchInput} type="text" placeholder="Искать на сайте" />
            </div>
            <div className="info"></div>
        </div>
    )
}