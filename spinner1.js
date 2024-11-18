setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

// Add additional characters in order to complete one full animation of this nearly completed "spinner", so that it completes a full circle as shown in the demo above.

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1700);
