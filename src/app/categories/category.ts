import { Restaurant } from '../restaurants/restaurant';

export interface Category {
    name: string;
    restaurants: Restaurant[];
}
