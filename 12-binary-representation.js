// Write a recursive function that prints out the binary representation of a given number. 
// For example, the program should take 3 as an input and print 11 as output, 
// Or 25 as an input and print 11001 as an output. 
// Note that the binary representation of 0 should be 0.

const binary = (num) => {
    if (num === 0) {
        return 0
    }

    const div = Math.floor(num/2)
    const remainder = num % 2
    if (div === 0) {
        return `${remainder}`;
    }
    return binary(div) + remainder.toString()
}

console.log(binary(25))
console.log(binary(0))
console.log(binary(3))