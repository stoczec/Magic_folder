const tower = [[1, 2, 3], [], []];

while (tower[2].length !== [1, 2, 3]) {
  for (let i = 0; i < tower.length; i++) {
    if (i < 2 && tower[i] !== []) {
      if (
        tower[i][tower[i].length - 1] > tower[i + 1][tower[i + 1].length - 1] ||
        tower[i + 1].length === 0
      ) {
        tower[i + 1].push(tower[i][tower[i].length - 1]);
        tower[i].splice(tower[i].length - 1, 1);
      }

      console.log(tower);
    }
    // else if (tower[i] !== []) {
    //   tower[i][tower[i].length - 1] > tower[0][tower[0].length - 1]
    //     ? tower[0].push(tower[i][tower[i].length - 1])
    //     : '';
    //   console.log(tower[i][tower.length - 1]);
    // }
  }
}
console.log(tower);
