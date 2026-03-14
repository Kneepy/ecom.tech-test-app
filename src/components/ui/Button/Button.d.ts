import React from "react";
interface Props {
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}
export declare const Button: ({ children, onClick, disabled, className }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
