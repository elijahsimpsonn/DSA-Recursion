// Write a recursive function that prints the Fibonacci sequence of a given number. 
// The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. 
// For example, the 7th Fibonacci number in a Fibonacci sequence is 13. 
// The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

const fibonacci = (number) => {
    // Base Case
    if (number === 1) return [1]
    if (number === 2) return [1, 1]
    // Recursive Case
    const sequence = [...fibonacci(number - 1)]
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
    return sequence
}

console.log(fibonacci(13))
console.log(fibonacci(7))
console.log(fibonacci(5))
console.log(fibonacci(2))