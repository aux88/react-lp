import style from "./Button.module.css";
import { ReactNode } from "react"
import { Link } from "react-router-dom";

interface ButtonProps {
    children: ReactNode;
    path: string;
}

export const Button = ({path,children}:ButtonProps) => {
    return (<Link to={path} className={style.linkButton}>{children}</Link>)
}