
export interface Category {
    id: number;
    name: string;
    icon: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    image: any;
}

export interface Collection {
    id: number;
    name: string;
    discount?: string;
    subtitle?: string;
    image: any;
}

export interface InstagramPost {
    id: number;
    image: any;
}
