function calculateIslandPerimeter(matrix) {
  let perimeter = 0;

  // Define directions for neighboring cells: up, down, left, right
  const directions = [
    [-1, 0, 0],
    [1, 0, 1 ],
    [0, -1, 0],
    [0, 1, 1 ],
  ];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        // For each land cell, check its surroundings
        for (const [dx, dy] of directions) {
          const ni = i + dx;
          const nj = j + dy;

          // Check if the surrounding cell is water or out of bounds
          if (ni < 0 || ni >= matrix.length || nj < 0 || nj >= matrix.length || matrix[ni][nj] === 0) {
            perimeter++;
          }
        }
      }
    }
  }

  return perimeter;
}

// Example usage:
const matrix = [
  [1, 1, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 1],
];

console.log(
  "El perímetro total de las islas es:",
  calculateIslandPerimeter(matrix)
);
