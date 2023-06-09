// Program Mean dan Median

function meanMedian(arrayInput) {
  // hitung sum keseluruhan element pada array
  let sum = arrayInput.reduce((x, y) => x + y, 0);
  // hitung mean
  let mean = sum / arrayInput.length;
  // mencari median
  let median;
  let middleIndex = Math.floor(arrayInput.length / 2);

  if (arrayInput.length % 2 === 0) {
    median = (arrayInput[middleIndex - 1] + arrayInput[middleIndex]) / 2;
  } else {
    median = arrayInput[middleIndex];
  }
  // return mean dan median sebagai string dengan spasi ditengah
  return mean + " " + median;
}


console.log(meanMedian([1, 2, 3, 4]))          // 2.5 2.5
console.log(meanMedian([1, 2, 3, 4, 5]))       // 3 3
console.log(meanMedian([7, 8, 9, 13, 15]))     // 10.4 9
console.log(meanMedian([10, 20, 30, 40, 50]))  // 30 30
console.log(meanMedian([15, 20, 30, 60, 120])) // 49 30