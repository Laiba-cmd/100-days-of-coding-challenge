let pricesSet1 = [1500, 1800, 2000];
let pricesSet2 = [1200, 1500, 1700];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);