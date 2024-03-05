const input = [];

const readline = require('readline').createInterface(
    process.stdin,
    process.stdout,
);

readline
    .on('line', (line) => {
        input.push(line);
    })
    .on('close', () => {
        const result = countGoals(input);
        console.log(result);
        process.exit(0);
    });

function countGoals(input) {
  const arr = input.map(str => str.split(':').map(Number));
  const type = arr[2][0];
  const goals = arr[0][1] + arr[1][1]-(arr[0][0] + arr[1][0]);

  if (goals < 0) return 0;
  if (type === 1) {
      if (arr[1][0] + goals > arr[0][1]) return goals;
      return goals + 1;
  } else {
      if (arr[1][1] >= arr[0][0]) return goals + 1;
      return goals;
  }
}