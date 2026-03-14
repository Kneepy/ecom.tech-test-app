interface Props {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    type?: "text" | "password" | "email" | "password_confirmation" | "email_confirmation";
}
export declare const Input: ({ placeholder, value, className, onChange, type }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
