for (let i = 2; i < scriptArgs.length; i++) {
  // Process each argument
  console.log(`Argument ${i - 1}: ${scriptArgs[i]}`);
}

const args = scriptArgs.slice(2);
console.log(args);
