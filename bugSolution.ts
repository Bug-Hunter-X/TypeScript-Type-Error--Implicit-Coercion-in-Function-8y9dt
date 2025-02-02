function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a + b;
}

const result = add(1, 2); // Correct usage
console.log(result); // Output: 3

try {
  const result2 = add("1", 2); // Incorrect usage
  console.log(result2);
} catch (error) {
  console.error(error.message); // Output: Both parameters must be numbers
}
