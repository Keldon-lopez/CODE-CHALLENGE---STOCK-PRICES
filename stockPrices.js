const best = (prices) =>{
  lowest = 0;
  highest = 0;
  gains = 0;
  for (let index = 0; index < prices.length; index++) {
    for (let j = index; j < prices.length; j++) {
      if (prices[j] - prices[index] > gains) {
        gains = prices[j] - prices[index];
        lowest = prices[index];
        highest = prices[j];
      }
    }
    
  }
  console.log(lowest);
  console.log(highest);
  return gains;
}

console.log(best([3, 4, 10, 6, 1, 9, 1]));