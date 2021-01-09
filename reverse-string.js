// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

const reverseString = (string) => {
    // Base Case
    if (string.length === 1) {
        return string
    }
    // Recursive Case
    return string[string.length - 1] + reverseString(string.slice(0, -1))
}

console.log(reverseString('thinkful'))
console.log(reverseString('german'))
console.log(reverseString('a'))

// Explain Line 9
// Returns the String Length - 1 ,so in the case of 'German', it returns the last char, or 'n'
// Plus it calls on the function again and slices off the last char of the string, so again 'n' in this case