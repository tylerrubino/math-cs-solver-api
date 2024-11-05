// controllers/mathController.js
const math = require('mathjs');
const { get } = require('../routes/mathRoutes');

// GCD calculation logic
exports.gcd = (req, res) => {
	const a = parseInt(req.query.a, 10); // parseInt used to query parameters
	const b = parseInt(req.query.b, 10);

	// check if the inputs are valid numbers
	if (isNaN(a) || isNaN(b)) {
		return res
			.status(400)
			.json({ error: 'Invalid input. Please provide two integers.' });
	}

	// calculate GCD
	const gcdResult = math.gcd(a, b);

	// return the result as JSON
	res.json({ result: gcdResult });
};

// Addition calculation logic
exports.addition = (req, res) => {
	const a = parseInt(req.query.a, 10);
	const b = parseInt(req.query.b, 10);

	// check if the inputs are valid
	if (isNaN(a) || isNaN(b)) {
		return res
			.status(400)
			.json({ error: 'Invalid input. Please provide two integers.' });
	}

	// sum the numbers
	const addResult = math.add(a, b);

	// return the result as JSON
	res.json({ result: addResult });
};

// Subtraction calculation logic
exports.subtraction = (req, res) => {
	const a = parseInt(req.query.a, 10);
	const b = parseInt(req.query.b, 10);

	// check if the inputs are valid
	if (isNaN(a) || isNaN(b)) {
		return res
			.status(400)
			.json({ error: 'Invalid input. Please provide two integers.' });
	}

	// subtract the numbers
	const subResult = math.subtract(a, b);

	// return the result as JSON
	res.json({ result: subResult });
};

// Multiplication calculation logic
exports.multiplication = (req, res) => {
	const a = parseInt(req.query.a, 10);
	const b = parseInt(req.query.b, 10);

	// check if the inputs are valid
	if (isNaN(a) || isNaN(b)) {
		return res
			.status(400)
			.json({ error: 'Invalid input. Please provide two integers.' });
	}

	// multiply the numbers
	const multiplyResult = math.multiply(a, b);

	// return the result as JSON
	res.json({ result: multiplyResult });
};

// Division calculation logic
exports.division = (req, res) => {
	const a = parseInt(req.query.a, 10);
	const b = parseInt(req.query.b, 10);

	// check if the inputs are valid
	if (isNaN(a) || isNaN(b)) {
		return res
			.status(400)
			.json({ error: 'Invalid input. Please provide two integers.' });
	}

	// divide the numbers
	const divideResult = math.divide(a, b);

	// return the result as JSON
	res.json({ result: divideResult });
};

// Factorial calculation logic
exports.factorial = (req, res) => {
	const n = parseInt(req.query.n, 10);

	// check if the inputs are valid
	if (isNaN(n)) {
		return res
			.status(400)
			.json({ error: 'Invalid input. Please provide two integers.' });
	}

	// compute the factorial of n
	const factorialResult = math.factorial(n);

	// return the result as JSON
	res.json({ result: factorialResult });
};

// Fibonacci Sequence calculation logic
exports.fibonacci = (req, res) => {
	const n = parseInt(req.query.n, 10);

	// check if the inputs are valid
	if (isNaN(n)) {
		return res
			.status(400)
			.json({ error: 'Invalid input. Please provide two integers.' });
	}

	// find the nth Fibonnaci number
	const getNthFib = (n) => {
		/* recursive approach:

		if (n == 0) return 0;
		if (n == 1) return 1;
		return getNthFib(n - 1) + getNthFib(n - 2); */

		// iterative approach:
		let a = 0,
			b = 1,
			temp;
		for (let i = 0; i < n; i++) {
			temp = a;
			a = b;
			b = temp + b;
		}
		return a;
	};

	// return the result as JSON
	res.json({ result: getNthFib(n) });
};
