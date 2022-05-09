import { Pizza, PizzasState } from './pizzas';

export type PizzaCardProps = Pick<Pizza, 'id' | 'name' | 'imageUrl' | 'price'> &
  Pick<PizzasState, 'isLoaded'> & {
    types: Array<number>;
    sizes: Array<number>;
    onAddPizzaToCart: (pizzaObj: Pizza) => void;
    pizzasInCart: number;
  };
