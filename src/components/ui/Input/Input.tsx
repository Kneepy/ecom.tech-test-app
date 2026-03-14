import styles from "./Input.module.scss"
import classnames from "classnames";

interface Props {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    type?: "text" | "password" | "email" | "password_confirmation" | "email_confirmation";
}

export const Input = ({ placeholder, value, className, onChange, type }: Props) => {
    return (
        <input
            className={classnames(styles.input, className)}
            value={value ?? ""}
            onChange={(e) => onChange && onChange(e.target.value)}
            placeholder={placeholder}
            type={type}
        />
    )
}