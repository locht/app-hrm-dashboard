
import { Category, Collection, Product } from '../interface/home.interface';

export const categories: Category[] = [
    { id: 1, name: 'Women', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300' },
    { id: 2, name: 'Men', image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=300' },
    { id: 3, name: 'Kids', image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=300' },
    { id: 4, name: 'Accessories', image: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=300' },
    { id: 5, name: 'Beauty', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300' }
];

export const newArrivals: Product[] = [
    { id: 1, name: 'Winter Jacket', price: 99.99, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400' },
    { id: 2, name: 'Cozy Sweater', price: 59.99, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400' },
    { id: 3, name: 'Warm Boots', price: 79.99, image: 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=400' },
    { id: 4, name: 'Winter Hat', price: 29.99, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400' }
];

export const featuredProducts: Product[] = [
    { id: 1, name: 'Winter Coat', price: 129.99, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400' },
    { id: 2, name: 'Scarf Set', price: 39.99, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400' },
    { id: 3, name: 'Gloves', price: 24.99, image: 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=400' },
    { id: 4, name: 'Winter Set', price: 89.99, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400' }
];

export const collections: Collection[] = [
    { id: 1, name: 'Women Collection', type: 'women', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800' },
    { id: 2, name: 'Men Collection', type: 'men', image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800' }
];

export const instagramPosts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300' },
    { id: 2, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300' },
    { id: 3, image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=300' },
    { id: 4, image: 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=300' }
];
