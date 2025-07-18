function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const arg = Number(process.argv[2]);
const result = isNaN(arg) ? 1 : factorial(arg);

console.log(result);
