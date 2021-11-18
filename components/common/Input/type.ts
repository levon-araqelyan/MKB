export type inputType = {
    label?: string;
    type: string;
    placeholder?: string;
    className?: string;
    errorMessage?: string;
    onChange?: (e: { target: { value: string } }) => void;
    value?: string;
    isInvalid?: boolean;
    [x: string]: any;
}