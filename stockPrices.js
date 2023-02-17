const best = (prices) =>{
    let lowest = 0;
    let highest = 0;
    let reversedPrices = prices.reverse();
    for (let index = 0; index < reversedPrices.length; index++) {
        // console.log("index", prices[index]);
        if (prices[index] > prices[index + 1]) {
            if(prices[index] >= highest){
                highest = prices[index];
            }
        } else {
            if (lowest === 0) {
                lowest = prices[index];
            } else (prices[index] < lowest);
            lowest = prices[index];
        }
    }
    // console.log(highest);
    // console.log(lowest);
    let gains = highest - lowest;
    if (gains > 0) {
        return gains //`total gain of ${gains} if bought at ${lowest} and sold at ${highest}`
    } else {
        return 0
    }
}

console.log(best([2, 3, 10, 6, 4, 8, 1]));