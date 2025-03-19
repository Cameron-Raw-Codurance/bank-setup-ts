describe("Bank account should", () => {
	it("handle transactions and print statement", () => {
		// TODO: Create a test that follows this requirement - Haz un test que cumple con este requisito
		//
		// Given a client makes a deposit of 1000 on 10-01-2012
		// And a deposit of 2000 on 13-01-2012
		// And a withdrawal of 500 on 14-01-2012
		// When they print their bank statement
		// Then they would see:
		//
		// Date       || Amount || Balance
		// 14/01/2012 || -500   || 2500
		// 13/01/2012 || 2000   || 3000
		// 10/01/2012 || 1000   || 1000

		const mockBankAccount = jest.fn().mockImplementation(() => ({
			printStatement: jest.fn().mockReturnValue(32)
		}));

		const service = mockBankAccount();
		expect(service.printStatement()).toEqual(32);
	});
});
