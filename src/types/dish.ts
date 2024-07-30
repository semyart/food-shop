export enum WeightUnit {
  Gram = 'gram'
}

export interface Dish {
  id: number;
  name: string;
  description: null | string;
  price: string;
  old_price: null | string;
  weight: null | string;
  photo: null | string;
  weight_unit: WeightUnit;
}

export enum DishViewType {
  Card = 'card',
  List = 'list'
}
