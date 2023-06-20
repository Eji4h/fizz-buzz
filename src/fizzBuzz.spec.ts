import fizzBuzz from "./fizzBuzz";

describe('FizzBuzz', () => {
	
	it(`should be '1' when input is 1`, () => {
		// Arrange
		const input = 1;
		const expected = '1';

		// Act
		const actual = fizzBuzz(input);

		// Assert
		expect(actual).toBe(expected);
	})
});