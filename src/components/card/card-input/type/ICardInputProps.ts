export interface ICardInputProps {
    value?: string
    onChange: (value: string) => void;
    placeholder: string
    onSubmitEditing: () => void;
}
