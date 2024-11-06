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

// Binomial Coefficient calculation logic (n choose k)
exports.binomialCoefficient = (req, res) => {
  const n = parseInt(req.query.n, 10);
  const k = parseInt(req.query.k, 10);

  // check if the inputs are valid
  if (isNaN(n) || isNaN(k)) {
    return res
      .status(400)
      .json({ error: 'Invalid input. Please provide two integers.' });
  }

  // the formula for binomial coefficient is (n choose k) = n! / k!(n-k)!, where n >= k
  // start by ensuring that n >= k
  if (k > n) {
    return res
      .status(400)
      .json({ error: 'Invalid input. Binomial coefficients require n >= k.' });
  }

  // compute factorials of n & k
  const nFactorial = math.factorial(n);
  const kFactorial = math.factorial(k);
  const nMinusKFactorial = math.factorial(n - k);

  // compute the binomial coefficient
  const binomialCoefficient = nFactorial / (kFactorial * nMinusKFactorial);

  //return the result as JSON
  res.json({ result: binomialCoefficient });
};

// Exponents calculation
exports.exponent = (req, res) => {
  const a = parseInt(req.query.a, 10);
  const n = parseInt(req.query.n, 10);

  // check if the inputs are valid
  if (isNaN(a) || isNaN(n)) {
    return res
      .status(400)
      .json({ error: 'Invalid input. Please provide two integers.' });
  }

  // compute the exponent
  const exponentResult = a ** n;

  res.json({ result: exponentResult });
};

// Eulers Exponent Calculation
exports.eulersExponent = (req, res) => {
  const n = parseInt(req.query.n, 10);

  // check if the input is valid
  if (isNaN(n)) {
    return res
      .status(400)
      .json({ Error: 'Invalid input. Please provide two integers.' });
  }

  // compute the exponent of the euler number
  const eulerResult = Math.exp(n);

  res.json({ result: eulerResult });
};
