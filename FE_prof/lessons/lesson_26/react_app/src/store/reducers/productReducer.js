const ADD_PRODUCT = '[ADD_PRODUCT_FORM] ADD_PRODUCT';
const DELETE_PRODUCT = '[ADD_PRODUCT_FORM] DELETE_PRODUCT';

export const addProductAction = (payload) => ({ type: ADD_PRODUCT, payload });
export const deleteProductAction = (payload) => ({
  type: DELETE_PRODUCT,
  payload,
});

export const productReducer = (state = [], action) => {
  if (action.type === ADD_PRODUCT) {
    return [...state, action.payload];
  } else if (action.type === DELETE_PRODUCT) {
    return state.filter((el) => el.id !== action.payload);
  } else {
    return state;
  }
};
