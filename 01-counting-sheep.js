// Write a recursive function that counts how many sheep jump over the fence. 
// Your program should take a number as input. 
// That number should be the number of sheep you have. 
// The function should display the number along with the message 
// "Another sheep jumps over the fence" until no more sheep are left.

const sheepCount = (int) => {
    // Base Case
    if (int === 0){
        return ('All the sheep have jumped over the fence')
    } 
    // Recursive Case
    return (
        `Sheep number ${int} jumps over the fence \n` +
        sheepCount(int - 1)
    )
}

console.log(sheepCount(3))