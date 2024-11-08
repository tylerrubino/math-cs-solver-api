# Math and CS Solver API

The **Math and CS Solver API** is a RESTFUL API designed to handle a variety of mathematical and computer science-related calculations. This first iteration includes endpoints for basic arithmetic, factorial, Fibonacci sequence, and greatest common divisor (GCD), providing a reliable backend for math applications or learning tools.

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [API Documentation](#api-documentation)
5. [Future Enhancements](#future-enhancements)
6. [Contributing](#contributing)
7. [License](#license)

## Features

The API currently supports the following calculations:

- **Bais Arithmetic**: Addition, subtraction, multiplication, and division.
- **Factorial Calculator**: Computes the factorial of a given integer.
- **Fibonacci Sequence**: Calculates the GCD of two integers.
- **Greatest Common Divisor (GCD)**: Calculates the GCD of two integers.
- **Exponent Calculator**: Calculates the exponent of an input number, a, to the input exponent, n.
- **Binomial Coefficient**: Calculates total number of choices/possibilities, given a set of size n, and a subset size of k, (n choose k).
- **Euler Exponent Calculator**: Calculates eulers number (e) to the power of an input exponent, n.
- **Derivative Calculator**: Calculates the first derivative of a given expression.

## Tech Stack

- **Node.js**: Server environment.
- **Express.js**: Framework for handling routes and middleware.
- **Math.js**: Library for advanced mathematical functions.

## Getting Started

To set up the API locally, follow these steps:

### Prerequisites

- **Node.js** and **npm** installed on your machine

### Installation

1. **Clone the Repository**:

```bash
git clone https://github.com/tylerrubino/math-cs-solver-api.git
cd math-cs-solver-api
```

2. **Install Dependendies**:

```bash
npm install
```

3. **Start the Server**:

```bash
npm start
```

The API will start on http://localhost:5000 by default

4. **Environment Variables**:

- Add a `.env` file to the root directory to configure environment variables like the port number.
- Example `.env`:

```
PORT=5000
```

## API Documentation

Below are the available endpoints in this first iteration. Each endpoint accepts parameters via URL query strings and returns JSON responses.

1. **Basic Arithmetic Operations**
   **Addition**

   - **Endpoint**: `/api/add`
   - **Method**: GET
   - **Parameters**: `a`,`b` (numbers)
   - **Description**: Adds two numbers and returns the result.
   - **Example**:

   ```http
   GET http://localhost:5000/api/add?a=10&b=5
   ```

   - **Response**

   ```json
   {
   	"result": 15
   }
   ```

   **Subtraction**

   - **Endpoint**: `/api/subtract`
   - **Method**: GET
   - **Parameters**: `a`,`b` (numbers)
   - **Description**: Subtracts `b` from `a` and returns the result.
   - **Example**:

   ```http
   GET http://localhost:5000/api/subtract?a=10&b=5
   ```

   - **Response**

   ```json
   {
   	"result": 5
   }
   ```

   **Multiplication**

   - **Endpoint**: `/api/multiply`
   - **Method**: GET
   - **Parameters**: `a`,`b` (numbers)
   - **Description**: Multiplies `a` and `b` and returns the result.
   - **Example**:

   ```http
   GET http://localhost:5000/api/multiply?a=10&b=5
   ```

   - **Response**

   ```json
   {
   	"result": 50
   }
   ```

   **Division**

   - **Endpoint**: `/api/divide`
   - **Method**: GET
   - **Parameters**: `a`,`b` (numbers)
   - **Description**: Divides `a` by `b` and returns the result.
   - **Example**:

   ```http
   GET http://localhost:5000/api/divide?a=10&b=5
   ```

   - **Response**

   ```json
   {
   	"result": 2
   }
   ```

2. **Factorial Calculator**:

   - **Endpoint**: `/api/subtract`
   - **Method**: GET
   - **Parameters**: `n` (integer)
   - **Description**: Computers the factorial of `n`.
   - **Example**:

   ```http
   GET http://localhost:5000/api/factorial?n=5
   ```

   - **Response**

   ```json
   {
   	"result": 120
   }
   ```

3. **Fibonacci Sequence**:

   - **Endpoint**: `/api/fibonacci`
   - **Method**: GET
   - **Parameters**: `n` (integer)
   - **Description**: Returns the nth Fibonacci number.
   - **Example**:

   ```http
   GET http://localhost:5000/api/fibonacci?n=5
   ```

   - **Response**

   ```json
   {
   	"result": 55
   }
   ```

4. **Greatest Common Divisor (GCD)**:

   - **Endpoint**: `/api/gcd`
   - **Method**: GET
   - **Parameters**: `a`,`b` (integer)
   - **Description**: Calculates the greatest common divisor of `a` and `b`.
   - **Example**:

   ```http
   GET http://localhost:5000/api/gcd?a=20&b=30
   ```

   - **Response**

   ```json
   {
   	"result": 10
   }
   ```

5. **Binomial Coefficient**:

   - **Endpoint**: `/api/binomial`
   - **Method**: GET
   - **Parameters**: `n`,`k` (integer)
   - **Description**: Calculates the binomial coefficient of `n` choose `k`, where `n >= k`.
   - **Example**:

   ```http
   GET http://localhost:5000/api/binomial?n=10&k=5
   ```

   - **Response**

   ```json
   {
   	"result": 252
   }
   ```

6. **Exponent Calculator**:

   - **Endpoint**: `/api/exponent`
   - **Method**: GET
   - **Parameters**: `a`,`n` (integer)
   - **Description**: Calculates the value of of `a` to the exponent `n`.
   - **Example**:

   ```http
   GET http://localhost:5000/api/exponent?a=10&n=5
   ```

   - **Response**

   ```json
   {
   	"result": 100000
   }
   ```

7. **Euler Exponent Calculator**:

   - **Endpoint**: `/api/euler`
   - **Method**: GET
   - **Parameters**: `n` (integer)
   - **Description**: Calculates the value of of eulers number (e) to the exponent `n`.
   - **Example**:

   ```http
   GET http://localhost:5000/api/euler?n=5
   ```

   - **Response**

   ```json
   {
   	"result": 148.4131591025766
   }
   ```

8. **Derivative (differentiation) Calculator**:

   - **Endpoint**: `/api/derivative`
   - **Method**: POST
   - **Parameters**: `function` (the function expression), `variable` (variable to which we're deriving, ex: x, t, s, etc...)
   - **Description**: Calculates the first derivative of a given `function` (function) in respect to a `variable` .
   - **Example**:

   ```http
   POST http://localhost:5000/api/derivative
   ```

   Body:

   ```JSON
   {
   	"function": "x^2 + 2x + 7",
    "variable": "x"
   }
   ```

   - **Response**

   ```json
   {
   	"result": "2\\cdot\\left( x+1\\right)"
   }
   ```

   - Note: the frontend handles formatting to display nicely.

## Future Enhancements

Planned improvements and new features include:

- **Advanced Calculations**: Additional endpoints for logarithms, exponentiation, differentiation, integration and trigonometric functions.
- **Matrix Operations**: Support for matrix calculations such as addition, multiplication, and determinants.
- **Additional Error Handling**: Improved validation and error responses.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/NewFeature`).
3. Commit your changes (`git commit -m "Add NewFeature`).
4. Push to the branch (`git push origin feature/NewFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](../blob/main/LICENSE)
