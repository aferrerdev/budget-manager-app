import { Transaction } from "./Transaction";

export class Expense extends Transaction {
    
    public getAmount(): number {
        return -this.getAmount();
    }
}