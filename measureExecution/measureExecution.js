// function reverse(s) {
//   return s.split('').reverse().join('');
// }

function reverse(s) {
  var i = s.length,
    o = '';

  while (i > 0) {
    o += s.substring(i - 1, i);
    i--;
  }
  return o;
}

let start = performance.now();

reverse(
  'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello'
);

let timeTaken = performance.now() - start;

console.log(`Execution time: ${timeTaken} ms`);
