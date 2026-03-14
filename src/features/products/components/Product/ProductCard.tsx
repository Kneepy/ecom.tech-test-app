import style from "./ProductCard.module.scss"
import { type Product as ProductType } from "@/api"
import {Button} from "@components/ui";

interface Props {
    onClick(): void
    product: Pick<ProductType, "title" | "price" | "image">
}

export const ProductCard = ({ product, onClick }: Props) => {
    return (
        <div onClick={onClick} className={style.product}>
            <div className={style.preview} style={{backgroundImage: `url(${product.image})`}}></div>
            <div className={style.title}>{product.title}</div>
            <Button className={style.price}>{product.price} ₽</Button>
        </div>
    )
}