import apiClient from './index';
import type { Dish } from '@/types/dish';

export const fetchDishes = async (): Promise<Dish[]> => {
  const response = await apiClient.get<Dish[]>('/b/QIQ3');
  return response.data;
};
