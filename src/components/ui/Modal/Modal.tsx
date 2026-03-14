import {type MouseEvent, useEffect} from "react";
import {createPortal} from "react-dom";
import styles from "./Modal.module.scss";
import type {ModalProps} from "./Modal.types";

export const Modal = (
    { onClose, isOpen, children, className }: ModalProps
) => {
    const preventClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    useEffect(() => {
        const handleEscPress = (e: KeyboardEvent) => e.key === "Escape" && onClose()

        document.addEventListener("keydown", handleEscPress)

        if (isOpen) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscPress);
            document.body.style.overflow = "auto";
        };
    }, [onClose]);

    if (!isOpen) return null


    return createPortal((
        <div onClick={onClose} className={styles.modal}>
            <div onClick={preventClick}  className={className}>
                { children }
            </div>
        </div>
    ), document.body)
}