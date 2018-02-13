/**
 * Created by andrewhenderson on 2/11/18.
 */
function main() {
  const cycles = 1000000000;
  let start = Date.now();
  for (let i = 0; i < cycles; i++) {
    // empty loop
  }
  let end = Date.now();
  let duration = (end - start) / 1000;
  console.log('JavaScript looped %d times in %d seconds', cycles, duration);
}
main();