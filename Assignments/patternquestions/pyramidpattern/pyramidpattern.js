let n = 5; // Height of the pyramid

for (let i = 1; i <= n; i++) {
    let row = ""; // Initialize empty row

    // Add spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // Add stars
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }

    console.log(row); // Print row
}
