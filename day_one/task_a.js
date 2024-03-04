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
        const result = countTrees(input);
        console.log(result);
        process.exit(0);
    });

function countTrees(input) {
  const arr = input.map(str => str.split(' ').map(Number));
  const [P, V] = arr[0];
  const [Q, M] = arr[1];

  const intersection = (Math.min(P+V, Q+M) - Math.max(P-V, Q-M));

  if (intersection >= 0) {
    return allTrees = (V*2+1)+(M*2+1)-(intersection+1);
  } else {
    return allTrees = (V*2+1)+(M*2+1);
  }
}