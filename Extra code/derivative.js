// Import the math.js library
const math = require('mathjs');

// Function to calculate the derivative
function calculateDerivative(expression, variable) {
    // Parse the expression
    const parsedExpression = math.parse(expression);

    // Differentiate the expression with respect to the specified variable
    const derivative = math.derivative(parsedExpression, variable);

    // Simplify the result
    const simplifiedDerivative = math.simplify(derivative);

    // Return the derivative in algebraic form
    return simplifiedDerivative.toString();
}

// Example usage
const expression = '8x^2';
const variable = 'x';

const derivative = calculateDerivative(expression, variable);
console.log(`The derivative of ${expression} with respect to ${variable} is: ${derivative}`);
