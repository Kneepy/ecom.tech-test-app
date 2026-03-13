import style from "./Filter.module.scss"

interface Props {
    onClick: () => void
    text: string
}

export const Filter = ({ onClick, text }: Props) => {
    return (
        <div className={style.filter} onClick={onClick}>
            { text }
        </div>
    )
}