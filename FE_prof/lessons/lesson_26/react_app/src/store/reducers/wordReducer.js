import { words_data } from '../../data/words_data';

const ADD_WORD = '[ADD_WORD_FORM] ADD_WORD';
const REVERSE_WORD = '[WORD] REVERSE_WORD';
const DELETE_WORD = '[WORD] DELETE_WORD';

export const addWordAction = (payload) => ({ type: ADD_WORD, payload });
export const reverseCardAction = (payload) => ({ type: REVERSE_WORD, payload });
export const deleteCardAction = (payload) => ({ type: DELETE_WORD, payload });

export const wordReducer = (state = words_data, action) => {
  if (action.type === ADD_WORD) {
    return [...state, action.payload];
  } else if (action.type === REVERSE_WORD) {
    return state.map((el) => {
      if (el.id === action.payload && el.lang === 'eng') {
        el.lang = 'rus';
      } else if (el.id === action.payload && el.lang === 'rus') {
        el.lang = 'eng';
      }

      return el;
    });
  } else if (action.type === DELETE_WORD) {
    return state.filter((el) => el.id !== action.payload);
  } else {
    return state;
  }
};
