export enum ECardStatus {
    /**
     * The card is displayed in the general order
     */
    ON_STUDY = 'ON_STUDY',

    /**
     * The card is shown less often
     */
    ON_REPEAT = 'ON_REPEAT',

    /**
     * The card is delisted
     */
    KNOWN = 'KNOWN',
    
    /**
     * The user must select a status
     */
    UNDEFINED = 'UNDEFINED',
}
