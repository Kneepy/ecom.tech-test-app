import { type Product as ProductType } from "@/api";
interface Props extends Pick<ProductType, "title" | "price" | "image"> {
    onClick(): void;
}
export declare const ProductCard: ({ title, price, image, onClick }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
