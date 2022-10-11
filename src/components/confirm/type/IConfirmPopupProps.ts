export interface IConfirmPopupProps {
    text: string,
    acceptButtonText?: string
    declineButtonText?: string
    shown?: boolean
    closable?: boolean

    onResult: (isAccepted: boolean) => void
}
