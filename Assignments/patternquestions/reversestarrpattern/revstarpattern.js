// This variable represents the space (used to store stars)
let space = "";
// This variable represents the star symbol
let star = "*";

// Applying the loop
for (let i = 1; i <= 5; i++) {
    space = ""; // Reset space for each row
    for (let j = 5; j >= i; j--) {
        space += star; // Append stars to build the row
    }
    console.log(space); // Print the full row
}
