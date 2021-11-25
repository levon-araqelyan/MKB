export type modalType = {
    title: string;
    firstButtonTitle: string;
    secondButtonTitle: string;
    description: string;
    onCloseModal: () => void;
    secondButtonAction: () => void;
    firstButtonAction: () => void;
    show: boolean;
}