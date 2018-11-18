export abstract class Transaction {
    protected name: string;
    protected date: Date;
    protected amount: number;

    /**
     * Transaction constructor
     * @param {string} name Alias for the transaction
     * @param {string} amount Amount of money 
     */
    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }

    public abstract getAmount();

    public getName() {
        return this.name;
    }

    public getDate() {
        return this.date;
    }
}