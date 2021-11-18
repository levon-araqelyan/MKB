export type alertType = {
    title?: string;
    description: string;
    onClose: () => void;
    className?: string;
    type: "primary" | "secondary" | "success" | "danger" | "warning" | 'info' | 'light' | 'dark'
    [x:string]: any;
}