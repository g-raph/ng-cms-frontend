import { Restaurant } from '../restaurants/restaurant';

export interface Category {
    created_at: string;
    name: string;
    published_at: string;
    updated_at: string;
    restaurants: Restaurant[];
    id: number;
}
