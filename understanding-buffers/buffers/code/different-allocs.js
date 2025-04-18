const { Buffer } = require("buffer");

const buffer = Buffer.alloc(10000);

console.log(Buffer.poolSize >>> 1);
// * >>>  is a bitwise operator that shifts the bits of the number to the right by the number of places specified.
// * >>> 1 is the same as dividing by 2
// * >>> 2 is the same as dividing by 4
// * >>> 3 is the same as dividing by 8
// * Example: 8 >>> 1 = 4
// * Example: 8 >>> 2 = 2
// * Example: 8 >>> 3 = 1

const unsafeBuffer = Buffer.allocUnsafe(10000);

const buff = Buffer.allocUnsafeSlow(2);

for (let i = 0; i < unsafeBuffer.length; i++) {
  if (unsafeBuffer[i] !== 0) {
    console.log(
      `Element at position ${i} has value: ${unsafeBuffer[i].toString(2)}`
    );
  }
}
