// Write a function called powerCalculator() that takes two parameters, 
// an integer as a base, and another integer as an exponent. 
// The function returns the value of the base raised to the power of the exponent. 
// Use only exponents greater than or equal to 0 (positive numbers)


const powerCalculator = (n, e) => {
    // Base Case
    if (e < 0){
        return 'Exponent should be >= 0'
    } else if (e === 0){
        return 1
    }
    // Recursive Case
    return n * powerCalculator(n, e - 1) 
}

console.log(powerCalculator(10, 2))
console.log(powerCalculator(12, 4))
console.log(powerCalculator(5, 0))
console.log(powerCalculator(7, -1))

