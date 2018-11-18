import { BankAccount } from "./BankAccount";
import { Expense } from "./Expense";
import { Benefit } from "./Benefit";

export class User {
    /**
     * User profile information
     */
    private email: string;
    private name: string;
    private avatar: string;

    /**
     * Financial information
     */
    private accounts: Array<BankAccount>;
    private fixedMonthlyExpenses: Array<Expense>;
    private fixedMonthlyBenefits: Array<Benefit>;

    constructor() {
        this.accounts = new Array<BankAccount>();
        this.fixedMonthlyBenefits = new Array<Expense>();
        this.fixedMonthlyExpenses = new Array<Benefit>();
    }

    public getEmail() {
        return this.email;
    }

    public getName() {
        return this.name;
    }

    public getAvatar() {
        return this.avatar;
    }
}