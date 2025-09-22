// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage
const input = "Hello, world!";
const reversed = reverseString(input);
console.log("Original:", input);
console.log("Reversed:", reversed);
