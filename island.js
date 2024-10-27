const matrix = [
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 1],
];

function calculatePerimeter() {
  let island = matrix;
  if (island == null || island.length == 0 || island[0].length == 0) return 0;

  let result = 0;
  for (let x = 0; x < island.length; x++) {
    for (let y = 0; y < island[x].length; y++) {
      if (island[x][y] === 1) {
        result += 4;

        if (x != 0 && island[x - 1][y] == 1) {
          result -= 2;
        }
        if (y != 0 && island[x][y - 1] == 1) {
          result -= 2;
        }
      }
    }
  }
  return result;
}

console.log(calculatePerimeter(matrix));
