const best = (prices) => {
  // We need to find the lowest number, the highest number, and the index of the highest number to check for the lowest number that happens earlier in the day
  let lowest = 0;
  let highest = 0;
  let highestIndex = 0;

  // We need to work our way backwards on the timeline in order to find the highest number latest in the day first and then the lowest number before that, if we didn't reverse it then it could find the highest number before the lowest number making the gains wrong
  let reversedPrices = prices.reverse();

  // First we need to find the highest number
  for (let index = 0; index < reversedPrices.length; index++) {
    if (prices[index] > prices[index + 1]) {
      if (prices[index] >= highest) {
        highest = prices[index];
        highestIndex = index;
      }
    }
  }
  //now we will find the lowest number that happens after the highest number in the reversed array making it earlier in the day not reversed
  for (let index = highestIndex; index < reversedPrices.length; index++) {
    if (lowest === 0) {
      lowest = prices[index];
    } else if (prices[index] < lowest) {
      lowest = prices[index];
    }
  }

  // We then find the total gains and return the gains. If the gains are zero or negative then returns 0
  let gains = highest - lowest;
  if (gains > 0) {
    return gains;
  } else {
    return 0;
  }
};

console.log(best([2, 3, 10, 6, 4, 8, 1]));
