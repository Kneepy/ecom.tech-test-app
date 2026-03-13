import React from "react";

export interface ModalProps {
    onClose: () => void;
    isOpen: boolean;
    children?: React.ReactNode;
}