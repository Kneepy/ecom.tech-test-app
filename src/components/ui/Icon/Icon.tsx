import React from 'react'
import styles from "./Icon.module.scss"
import classnames from "classnames"

interface IconProps {
    name: string
    variant?: "filled" | "outlined" | "round" | "sharp" | "two-tone"
    size?: number | string
    color?: string
    className?: string
}

export const Icon = ({
    name, variant = "round", size = 24, color, className
}: IconProps) => {

    const style: React.CSSProperties = {
        fontSize: typeof size === "number" ? `${size}px` : size,
        color: color,
        userSelect: "none"
    }

    return (
        <span
            className={classnames(`material-icons${variant !== "filled" ? `-${variant}` : ''} ${className || ''}`, styles.icon)}
            style={style}
        >
            { name }
        </span>
    )
}