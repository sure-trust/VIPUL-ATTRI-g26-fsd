// This variable represents the space (used to store stars)
let space = "";
// This variable represents the star symbol
let star = "*";
// This is the number of rows (scope of the loop)
let n = 5;

// Applying the loop
for (let i = 1; i <= n; i++) {
    space = ""; // Reset space for each row
    for (let j = 1; j <= i; j++) {
        space += star; // Append stars to build the row
    }
    console.log(space); // Print the full row
}
/*
*
**
***
****
*****
*/