// routes/mathRoutes.js
const express = require('express');
const router = express.Router();
const mathController = require('../controllers/mathController');

// GCD endpoint
router.get('/gcd', mathController.gcd);

// ADD endpoint
router.get('/add', mathController.addition);

// SUBTRACTION endpoint
router.get('/subtract', mathController.subtraction);

// MULTIPLICATION endpoint
router.get('/multiply', mathController.multiplication);

// DIVISION endpoint
router.get('/divide', mathController.division);

// FACTORIAL endpoint
router.get('/factorial', mathController.factorial);

// FIBONACCI endpoint
router.get('/fibonacci', mathController.fibonacci);

// BINOMIAL COEFFICIENT endpoint
router.get('/binomial', mathController.binomialCoefficient);

// EXPONENT endpoint
router.get('/exponent', mathController.exponent);

// EULER EXPONENT endpoint
router.get('/euler', mathController.eulersExponent);

module.exports = router;
