import {type MouseEvent, useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import styles from "./Modal.module.scss";
import type {ModalProps} from "./Modal.types";

export const Modal = (
    { onClose, isOpen, children }: ModalProps
) => {
    const contentRef = useRef<HTMLDivElement>(null)

    const preventClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    useEffect(() => {
        console.log(onClose, isOpen)
    }, []);

    if (!isOpen) return null

    return createPortal((
        <div onClick={onClose} className={styles.modal}>
            <div className={styles.modalBox}>
                <div onClick={preventClick} className={styles.modalContent} ref={contentRef}>
                    {children}
                </div>
            </div>
        </div>
    ), document.body)
}