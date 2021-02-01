export interface Restaurant {
    name: string;
    description: string;
    image: RestaurantImage[];
    categories: RestaurantCategory[];
    slug?: string;
    id: string;
}

export interface RestaurantCategory {
    name: string;
}

export interface RestaurantImage {
    url: string;
}
