import style from "./Filter.module.scss"
import {Button} from "@components/ui"
import React from "react"
import classnames from "classnames";

interface Props {
    onClick?: () => void
    active?: boolean
    children?: React.ReactNode
}

export const Filter = ({ onClick = () => {}, children, active }: Props) => {
    return (
        <Button className={classnames(style.filter, active && style.active)} onClick={onClick}>
            { children }
        </Button>
    )
}