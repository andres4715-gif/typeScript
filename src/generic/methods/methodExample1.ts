function removingFirstOneFromArray<T>(arr: T[]): T[] {
  const removeDuplicatedData = [...new Set(arr)];
  return removeDuplicatedData;
}

// Remove Duplicated Data
const printingNumber = removingFirstOneFromArray([
  1, 2, 3, 4, 4, 4, 4, 4, 4, 4,
]);
const printingString = removingFirstOneFromArray(['go', 'sleep', 'run', 'run']);

console.log(printingNumber);
console.log(printingString);
