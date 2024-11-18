const spinnerChars = ['|', '/', '-', '\\'];
let delay = 100;

spinnerChars.forEach((char, index) => {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay + index * 200);
});

setTimeout(() => process.stdout.write('\n'), delay + spinnerChars.length * 200);