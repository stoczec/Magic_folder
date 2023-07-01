function findOptimal() {
  const weights = [3, 4, 5, 8, 9, 4, 13, 1];
  const prices = [1, 6, 4, 7, 6, 10, 1, 13];
  const maxWeight = 100;

  const remainingIndexes = [];
  const selectedIndexes = [];

  let selectedWeight = 0;

  for (let i = 0; i < weights.length; i++) {
    remainingIndexes.push(i);
  }

  while (remainingIndexes.length > 0) {
    let maxPrice = prices[remainingIndexes[0]];
    let maxIndex = remainingIndexes[0];

    for (let i = 1; i < remainingIndexes.length; i++) {
      const currentIndex = remainingIndexes[i];
      if (prices[currentIndex] > maxPrice) {
        maxPrice = prices[currentIndex];
        maxIndex = currentIndex;
      }
    }

    if (selectedWeight + weights[maxIndex] <= maxWeight) {
      selectedIndexes.push(maxIndex);
      selectedWeight += weights[maxIndex];
    }

    remainingIndexes.splice(remainingIndexes.indexOf(maxIndex), 1);
  }
  for (const index of selectedIndexes) {
    console.log(index);
  }
}
findOptimal();
