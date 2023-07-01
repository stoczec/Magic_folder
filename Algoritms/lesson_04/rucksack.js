const randomNumber = (quantity) => {
  return Math.floor(Math.random() * quantity + 1);
};
const setQuantityBoxes = 10; // кол-во коробок
const setMaxWeight = 15; // максимально возможный вес одной коробки
const setMaxPriceBoxes = 100; // максимально возможное стоимость одной коробки
const maxCapacityRucksack = 20; // маскимальная вместомость рюкзака
// создаем объект с коробками
const createBoxes = (countBox) => {
  let boxes = {};
  for (let i = 1; i <= countBox; i++) {
    let keyWeight = randomNumber(setMaxWeight);
    let valuePrice = randomNumber(setMaxPriceBoxes);
    boxes[`Box ${i}`] = [
      [keyWeight], // вес коробки
      [valuePrice], // стоимость коробки
      [+(valuePrice / keyWeight).toFixed(2)], // кф - соотношение вес к стоимости
    ];
  }
  return boxes;
};
const boxes = createBoxes(setQuantityBoxes);
console.log(boxes);
// сортируем по кф
const sortedBoxes = (object) => {
  const entries = Object.entries(object);
  const sortedEntries = entries.sort((a, b) => {
    return b[1][2][0] - a[1][2][0];
  });
  const sortedObj = Object.fromEntries(sortedEntries);
  return sortedObj;
};
const sortedObj = sortedBoxes(boxes);
console.log(sortedObj);
// создаем рюкзак
const createRucksack = (object) => {
  const rucksack = {
    totalWeight: 0, // общий вес всех коробок
    totalCost: 0, // общая стоимость всех коробок
    currentWeight: 0, // текущий вес рюкзака
    currentCost: 0, // текущая стоимость коробок в рюкзаке
  };
  const entries = Object.entries(object);
  for (let i = 0; i < setQuantityBoxes; i++) {
    rucksack.totalWeight += entries[i][1][0][0];
    rucksack.totalCost += entries[i][1][1][0];
  }
  return rucksack;
};

const rucksack = createRucksack(sortedObj);
// наполняем рюкзак
const rucksackFilling = (sortedObject, rucksack) => {
  const entries = Object.entries(sortedObject);
  for (let i = 0; i < setQuantityBoxes; i++) {
    if (rucksack.currentWeight + entries[i][1][0][0] <= maxCapacityRucksack) {
      rucksack.currentWeight += entries[i][1][0][0];
      rucksack.currentCost += entries[i][1][1][0];
      rucksack[entries[i][0]] = entries[i][1];
    }
  }
  return rucksack;
};
console.log(rucksackFilling(sortedObj, rucksack));
