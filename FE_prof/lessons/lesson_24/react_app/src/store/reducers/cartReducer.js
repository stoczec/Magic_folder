import { ADD_TO_CARD } from '../action';

export const add_to_cart = (payload) => {
  return {
    type: ADD_TO_CARD,
    payload,
  };
};

const initalState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartReducer = (state = initalState, action) => {
  if (action.type === ADD_TO_CARD) {
    // Делается для того чтобы хранить в сторе только нужнуй информацию
    const { id, images, discountPercentage, price, title } = action.payload;
    // Проверка, есть ли товар уже в корзние или нету
    const existingItemInCart = state.products.find((item) => {
      return item.id === action.payload.id;
    });

    // если товар есть, увеличить его количество н 1
    if (existingItemInCart) {
      const updatedProducts = state.products.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            qunatity: item.qunatity + 1,
          };
        }

        return item;
      });

      return {
        ...state,
        products: updatedProducts,
      };
    } else {
      // Если товара нет, то добавляем его в корзину с начальным значением 1
      return {
        ...state,
        products: [
          ...state.products,
          { id, images, discountPercentage, price, title, qunatity: 1 },
        ],
      };
    }
  } else {
    return state;
  }
};

// 1. Надо изменить структуру каждого продукта который хранится в products.
// 2. Если у нас добавили в корзину один и тот же продукт обект должен остатся
// один но значнеи должно поменятся
