interface IconProps {
    name: string;
    variant?: "filled" | "outlined" | "rounded" | "sharp" | "two-tone";
    size?: number | string;
    color?: string;
    className?: string;
}
export declare const Icon: ({ name, variant, size, color, className }: IconProps) => import("react/jsx-runtime").JSX.Element;
export {};
