const matrix = [
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
];

function calculateIslandPerimeter(matrix) {
  let perimeter = 0;
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1) {
        if (i === 0 || matrix[i - 1][j] === 0) {
          perimeter++;
        }
        if (i === n - 1 || matrix[i + 1][j] === 0) {
          perimeter++;
        }
        if (j === 0 || matrix[i][j - 1] === 0) {
          perimeter++;
        }
        if (j === n - 1 || matrix[i][j + 1] === 0) {
          perimeter++;
        }
      }
    }
  }

  return perimeter;
}

console.log(
  "El perímetro total de las islas es:",
  calculateIslandPerimeter(matrix)
);
