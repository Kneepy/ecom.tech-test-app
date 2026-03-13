import style from "./ProductCard.module.scss"
import { type Product as ProductType } from "@/api"

interface Props extends Pick<ProductType, "title" | "price" | "image"> {
    onClick(): void
}

export const ProductCard = ({ title, price, image, onClick }: Props) => {
    return (
        <div onClick={onClick} className={style.product}>
            <div className={style.preview} style={{backgroundImage: `url(${image})`}}></div>
            <div className={style.title}>{title}</div>
            <div className={style.price}>{price}</div>
        </div>
    )
}