// СОЗДАЕМ ПУСТОЕ ДЕРЕВО
const binaryTree = {
  value: null,
  left: null,
  right: null,
};

// СОЗДАЕМ ФУНКЦИЮ, КОТОРАЯ ДОБАВЛЯЕТ НОВОЕ ЗНАЧЕНИЕ В ДЕРЕВО
const addValue = (obj, val) => {
  // ПРОВЕРЯЕМ НАЛИЧИЕ ПЕРВОГО ЗНАЧЕНИЯ В ДЕРЕВЕ
  if (obj.value === null) {
    obj.value = val;
  }
  // ДЕЛАЕМ ПРОВЕРКУ НОВОГО ЗНАЧЕНИЯ
  // ЕСЛИ МЕНЬШЕ
  if (val < obj.value) {
    // ЕСЛИ ЗНАЧЕНИЕ В ЛЕВОЙ ЧАСТИ ОТСУТСТВУЕТ, ДОБАВЛЯЕМ В НЕГО ОБЪЕКТ С НОВЫМ ЗНАЧЕНИЕМ
    if (obj.left === null) {
      obj.left = {
        value: val,
        left: null,
        right: null,
      };
    } // ЕСЛИ ЗНАЧЕНИЕ ЕСТЬ, ВЫЗЫВАЕМ ФУНКЦИЮ ДЛЯ РЕКУРСИИ, ПОКА НЕ ВЫПОЛНИТСЯ ПЕРВОЕ УСЛОВИЕ
    else {
      addValue(obj.left, val);
    }
  }
  // ЕСЛИ БОЛЬШЕ
  if (val > obj.value) {
    // ЕСЛИ ЗНАЧЕНИЕ В ПРАВОЙ ЧАСТИ ОТСУТСТВУЕТ, ДОБАВЛЯЕМ В НЕГО ОБЪЕКТ С НОВЫМ ЗНАЧЕНИЕМ
    if (obj.right === null) {
      obj.right = {
        value: val,
        left: null,
        right: null,
      };
    } // ЕСЛИ ЗНАЧЕНИЕ ЕСТЬ, ВЫЗЫВАЕМ ФУНКЦИЮ ДЛЯ РЕКУРСИИ, ПОКА НЕ ВЫПОЛНИТСЯ ПЕРВОЕ УСЛОВИЕ
    else {
      addValue(obj.right, val);
    }
  }
  return obj;
};
// addValue(binaryTree, 8);
// addValue(binaryTree, 7);
// addValue(binaryTree, 10);
// addValue(binaryTree, 9);
// addValue(binaryTree, 4);
// console.log(binaryTree);


