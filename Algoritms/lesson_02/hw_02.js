const stages = Math.floor(Math.random() * 10 + 1); // Рандомное кол-во этажей
const lift = Math.floor(Math.random() * 10 + 1); // Рандомное кол-во лифтов

// Функция возвращает объект с начальным и конечным этажом одного лифта
const createStartEnd = (stages) => {
  const liftWay = {};
  for (let i = 0; i <= lift; i++) {
    const start = Math.floor(Math.random() * stages + 1);
    const end = Math.floor(Math.random() * (stages - start) + start);
    const way = end - start;
    liftWay.start = start;
    liftWay.end = end;
    liftWay.way = way;
  }
  return liftWay;
};
// Объект дом
const home = {
  stages: stages,
  lift: [],
};

for (let i = 1; i <= lift; i++) {
  home.lift.push(createStartEnd(home.stages));
}

home.lift.sort((a, b) => {
  if (a.start !== b.start) {
    return a.start - b.start; // Сортировка по свойству start
  } else {
    return a.end - b.end; // Если start равны, сортировка по свойству end
  }
});

// for (let i = 0; i < home.lift.length; i++) {
//   arrLastStageLift.push(home.lift.end);
// }
console.log(`Stages: ${stages}
Lifts: ${lift}
MinStage: ${home.lift[0].start}
MaxStage: ${home.lift[home.lift.length - 1].end}
`);
console.log(home);

const result = (arr) => {
  let minValue = MinStage;
  let maxValue = MaxStage;
  let currentPosition = 0;
  let countLifts = 0;

  for (let i = MinStage; i <= MaxStage; i++) {
    for (let j = 0; j < arr.length; j++) {}
  }
};
