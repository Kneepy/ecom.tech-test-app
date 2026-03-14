import styles from "./Button.module.scss"
import classnames from "classnames";
import React from "react"

interface Props {
    children?: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    className?: string
}

export const Button = ({ children, onClick, disabled, className }: Props) => {
    return (
        <button
            className={classnames(styles.button, className)}
            disabled={disabled}
            onClick={onClick}
        >
            { children }
        </button>
    )
}