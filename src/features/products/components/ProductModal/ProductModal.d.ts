import { type ModalProps } from "@components/ui";
import type { Product } from "@/api";
interface Props extends ModalProps {
    product: Product;
}
export declare const ProductModal: ({ onClose, isOpen, product }: Props) => import("react/jsx-runtime").JSX.Element | null;
export {};
