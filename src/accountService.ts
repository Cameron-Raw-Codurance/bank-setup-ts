// WARN: You are not allowed to change this interface! - ¡No se puede cambiar esta interfaz!
export interface AccountService {
	deposit(amount: number): void
	withdraw(amount: number): void
	printStatement(): void
}
