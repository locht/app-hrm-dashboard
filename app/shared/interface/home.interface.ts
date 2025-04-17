export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

export interface Category {
    id: number;
    name: string;
    image: string;
}

export interface Collection {
    id: number;
    name: string;
    image: string;
    type: 'women' | 'men';
}
