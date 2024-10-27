const island = [
  [1, 1, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1],
];

function calculatePerimeter(island) {
  if (island == null || island.length == 0 || island[0].length == 0) return 0;
  let result = 0;

  for (let i = 0; i < island.length; i++) {
    for (let j = 0; j < island[i].length; j++) { //This loop iterates through each column (j) (each element) of the current row island[i].
      if (island[i][j] === 1) {
        result += 4;

        if (i > 0 && island[i - 1][j] == 1) { // [i - 1][j] = the row before(up) but the same column. If the cell above the current cell (i-1, j) is also land, 2 is subtracted from the perimeter to account for the shared edge.
          result -= 2;
        }
        if (j > 0 && island[i][j - 1] == 1) { // [i][j - 1] = the same row but the column before(left). If the cell to the left of the current cell (i, j-1) is also land, 2 is subtracted from the perimeter to account for the shared edge.
          result -= 2;
        }
      }
    }
  }
  return result;
}

console.log("El perímetro total de las islas es:", calculatePerimeter(island));
