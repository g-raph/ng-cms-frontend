export interface Restaurant {
    name: string;
    description: string;
    image: RestaurantImage[];
    categories: RestaurantCategory[];
}

export interface RestaurantCategory {
    name: string;
}

export interface RestaurantImage {
    url: string;
}
