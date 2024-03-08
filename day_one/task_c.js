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
        const result = countMin(input);
        console.log(result);
        process.exit(0);
    });
function countMin(input) {
  const arr = input.map(str => str.split(':').map(Number));
  const n = parseInt(arr[0][0]);
  const a = input.map(Number).slice(1);

  let sum = 0;

  for (let i = n-1; i >= 0; i--) {
    let num = parseInt(a[i]);
    let tabs = Math.floor(num/4);
    let tail = num%4;
    tail = Math.min(tail,2);
    sum += tabs+tail;
  }
  return sum;

  // let totalPresses = 0;

  // for ( let i = 0; i < n; i++) {
  //   let spacePresses = +a[i];
  //   let tabPresses = 0;
  //   let backspacePresses = 0;
  
  //   while (spacePresses >= 4) {
  //       tabPresses++;
  //       spacePresses -= 4;
  //   }
  
  //   if (spacePresses > 2) {
  //       backspacePresses = 4 - spacePresses;
  //       tabPresses++;
  //       spacePresses -= 0;
  //   }
  
  //   totalPresses += spacePresses + tabPresses + backspacePresses;
  // }
  // return totalPresses;
}