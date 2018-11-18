import { Transaction } from "./Transaction";

export class Benefit extends Transaction {
    public getAmount(): number {
        return +this.getAmount();
    }
}