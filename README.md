# Math and CS Solver API

The **Math and CS Solver API** is a RESTFUL API designed to handle a variety of mathematical and computer science-related calculations.This first iteration includes endpoints for basic arithmetic, factorial, Fibonacci sequence, and greatest common divisor (GCD), providing a reliable backend for math applications or learning tools.

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
