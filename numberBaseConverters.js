const decimalToBinary = (decimal = 0, binary = []) => {
	if (decimal === 0) {
		return binary.join("");
	}
	else if (decimal > 0 && decimal % 1 === 0) {
		binary.unshift(decimal % 2);
		return decimalToBinary(Math.floor(decimal / 2), binary);
	}
	else throw new Error("Input must be a positive integer.");
};

const decimalToBinary2 = (decimal = 0) => {
	if (!decimal.match(/^\d+$/)) throw new Error("Input must be a positive integer.");

	let bits = 1;
	while (2 ** bits <= decimal) {
		bits++;
	}

	let binary = [];
	for (let i = bits - 1; i >= 0; i--) {
		if (2 ** i <= decimal) {
			binary.push("1");
			decimal -= 2 ** i;
		}
		else {
			binary.push("0");
		}
	}

	return binary.join("");
};

const binaryToDecimal = (input = "") => {
	if (!input.match(/^[01]+$/)) throw new Error("Input must be in binary digits.");

	const binary = input.split("");
	const bits = binary.length;
	let decimalTotal = 0;

	for (let i = 0; i < bits; i++) {
		decimalTotal += binary[i] * (2 ** (bits - 1 - i));
	}

	return decimalTotal;
};

const binaryToDecimal2 = (input = "") => {
	if (!input.match(/^[01]+$/)) throw new Error("Input must be in binary digits.");
	
	const binary = input.split("");
	const bits = binary.length;
	return binary.map((bit, index) => bit * (2 ** (bits - 1 - index))).reduce((acc, cur) => acc + cur);
};
