import { AccountService } from "./accountService";

// TODO: You can change this class - Esta clase se puede cambiar
export class BankAccount implements AccountService {
	deposit(amount: number): void {
		throw new Error("Method not implemented.");
	}
	withdraw(amount: number): void {
		throw new Error("Method not implemented.");
	}
	printStatement(): void {
		throw new Error("Method not implemented.");
	}
}
