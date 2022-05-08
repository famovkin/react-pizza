import { Pizza } from './pizzas';
import { CartState } from './cart';

type CartHandler = (id: number) => void;

export type CartItemProps = Omit<Pizza, ''> &
  Pick<CartState, 'totalPrice' | 'totalCount'> & {
    deleteItem: CartHandler;
    handlePlusClick: CartHandler;
    handleMinusClick: CartHandler;
  };
