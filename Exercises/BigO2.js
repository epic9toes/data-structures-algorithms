function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);

// Add2 takes lesser time to execute compared to Add1 which means that it is more effective
