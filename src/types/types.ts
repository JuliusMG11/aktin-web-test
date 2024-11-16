export interface Product {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    rating: {
        count: number;
        rate: number;
    }
    price: number;
}

export interface Category {
    name: string;
    count: number;
}

