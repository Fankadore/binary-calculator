const inputDecimal = document.querySelector(".decimal-input");
const displayBinary = document.querySelector(".binary-display");
const displayBits = document.querySelector(".binary-bits");
const buttonBinary = document.querySelector(".binary-calculate");

const inputBinary = document.querySelector(".binary-input");
const displayDecimal = document.querySelector(".decimal-display");
const buttonDecimal = document.querySelector(".decimal-calculate");

buttonBinary.onclick = e => {
	const binary = decimalToBinary(inputDecimal.value);
	displayBinary.innerHTML = binary;
	if (binary.length > 1) {
		displayBits.innerHTML = `Requires ${binary.length} bits`;
	}
	else {
		displayBits.innerHTML = `Requires 1 bit`;
	}
};

buttonDecimal.onclick = e => {
	displayDecimal.innerHTML = binaryToDecimal(inputBinary.value);
};
