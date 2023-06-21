import fizzBuzz from "./fizzBuzz";

describe('FizzBuzz', () => {
	it.each`
		input | expected
		${1}  | ${'1'}
		${2}  | ${'2'}
	`(`should be $expected when input is not match rule ($input)`, ({ input, expected }: { input: number, expected: string}) => {
		// Act
		const actual = fizzBuzz(input);

		// Assert
		expect(actual).toBe(expected);
	});

	it.each`
		input
		${3}
		${6}
		${9}
	`(`should be 'Fizz' when input is isMultipleOfThree ($input)`, ({ input }: { input: number }) => {
		// Arrange
		const expected = 'Fizz';

		// Act
		const actual = fizzBuzz(input);

		// Assert
		expect(actual).toBe(expected);
	});

	it.each`
		input
		${5}
		${10}
		${20}
	`(`should be 'Buzz' when input is isMultipleOfFive ($input)`, ({ input }: { input: number }) => {
		// Arrange
		const expected = 'Buzz';

		// Act
		const actual = fizzBuzz(input);

		// Assert
		expect(actual).toBe(expected);
	});

	it.each`
		input
		${15}
		${30}
		${45}
	`(`should be 'FizzBuzz' when input is isMultipleOfFifteen ($input)`, ({ input }: { input: number }) => {
		// Arrange
		const expected = 'FizzBuzz';

		// Act
		const actual = fizzBuzz(input);

		// Assert
		expect(actual).toBe(expected);
	});
});