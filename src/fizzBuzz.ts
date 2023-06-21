export default (num: number): string => {
	const isMultipleOfThree = num % 3 === 0;
	const isMultipleOfFive = num % 5 === 0;
	const isMultipleOfFifteen = isMultipleOfThree && isMultipleOfFive;
	if (isMultipleOfFifteen) {
		return 'FizzBuzz';
	}
	if (isMultipleOfThree) {
		return 'Fizz';
	}
	if (isMultipleOfFive) {
		return 'Buzz';
	}
	return num.toString();
}