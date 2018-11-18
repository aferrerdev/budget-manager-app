export class BankAccount {

    private name: string;
    private amount: number;

    constructor(name: string) {
        this.name = name;
        this.amount = 0;
    }

    setName(name: string) {
        this.name = name;
    }

    setAmount(total: number) {
        this.amount = total;
    }

    getName() {
        return this.name;
    }

    getAmount() {
        return this.amount;
    }
}