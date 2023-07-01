const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = () => ({ type: SHOW_MODAL });
export const hideModal = () => ({ type: HIDE_MODAL });
export const modalReducer = (state = false, action) => {
  if (action.type === SHOW_MODAL) {
    return true;
  } else if (action.type === HIDE_MODAL) {
    return false;
  } else {
    return state;
  }
};

// В файл modalReducer.js добавить функциональность по управлению состоянием показа модалки
// Экшны: showModal, hideModal
// Сделать редьюсер по работе с этими экшнами
// InitialState = false
