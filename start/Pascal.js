
var generate = function(numRows) {
    const triangle = [];

    if (numRows === 0) {
        return triangle;
    }

    // First row is always [1]
    triangle.push([1]);

    for (let i = 1; i < numRows; i++) {
        const prevRow = triangle[i - 1];
        const currentRow = [1]; // Start current row with 1

        // Calculate middle elements of the current row
        for (let j = 1; j < prevRow.length; j++) {
            currentRow.push(prevRow[j - 1] + prevRow[j]);
        }

        currentRow.push(1); // End current row with 1
        triangle.push(currentRow);
    }

    return triangle;
};

let a = generate(5)
console.log(a);
