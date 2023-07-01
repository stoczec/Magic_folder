import { DECREMENT, INCREMENT } from "../action";

// actionCreateor - функция котора получает как аргумент payload (значение из клинета (View))
// и вовращает тип action-a и payload
export const increment_number = (payload) => {
  return {
    type: INCREMENT,
    payload,
  };
};

export const decrement_number = (payload) => {
  return {
    type: INCREMENT,
    payload,
  };
};

// начальное значение нашего стейта
const initalState = {
  counter: 0,
};

// reducer это функция котора изменяет наш стейт.
// Получает 2 аргумента state, action
// { ...state, ... } - озночает я возвращаю новый обект с измеными данными
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initalState, action) => {
  // Здесь идет проверка какой action вызволся для изменения стейта
  if (action.type === INCREMENT) {
    return { ...state, counter: state.counter + action.payload };
  } else if (action.type === DECREMENT) {
    if (state.counter > 0) {
      return { ...state, counter: state.counter - action.payload };
    } else {
      return state;
    }
  } else {
    // обязательно ставим else что означает если тип action никакой проверке не соответстбует
    // то верни стейт не измееным
    return state;
  }
};
