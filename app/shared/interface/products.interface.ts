// Định nghĩa các interface
interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    originalPrice: number;
    discount: number;
    image: string;
}

interface Category {
    id: string;
    name: string;
    checked: boolean;
}

interface Brand {
    id: string;
    name: string;
    checked: boolean;
}

interface PriceRange {
    id: string;
    name: string;
    checked: boolean;
}

interface ColorOption {
    id: string;
    name: string;
    color: string;
    checked: boolean;
}

interface SortOption {
    id: string;
    name: string;
    selected: boolean;
}

export { Product, Category, Brand, PriceRange, ColorOption, SortOption };
