export type buttonType = {
    title: string;
    onClick?: () => void;
    className?: string;
    variant: "primary" | "secondary" | "success" | "danger" | "outline-danger" | "light";
    size: "sm" | "lg",
    [x:string]: any;
}