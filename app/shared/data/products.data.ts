// Dữ liệu sản phẩm mẫu
const productData = [
    {
        id: '1',
        name: 'Khusbir K',
        category: 'Striped & Line Top',
        price: 87.9,
        originalPrice: 100.0,
        discount: 45,
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1005&q=80',
    },
    {
        id: '2',
        name: 'Kabir',
        category: 'Striped & Line Top',
        price: 97.9,
        originalPrice: 110.0,
        discount: 45,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    },
    {
        id: '3',
        name: 'Likee',
        category: 'Striped & Line Top',
        price: 99.9,
        originalPrice: 120.0,
        discount: 45,
        image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    },
    {
        id: '4',
        name: 'Single',
        category: 'Striped & Line Top',
        price: 50.9,
        originalPrice: 80.0,
        discount: 45,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80',
    },
    {
        id: '5',
        name: 'Khusbir K',
        category: 'Striped & Line Top',
        price: 87.9,
        originalPrice: 100.0,
        discount: 45,
        image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    },
    {
        id: '6',
        name: 'Arafaee',
        category: 'Striped & Line Top',
        price: 87.9,
        originalPrice: 100.0,
        discount: 45,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    },
    {
        id: '7',
        name: 'KLJM',
        category: 'Striped & Line Top',
        price: 87.9,
        originalPrice: 100.0,
        discount: 45,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80',
    },
    {
        id: '8',
        name: 'Likee',
        category: 'Striped & Line Top',
        price: 87.9,
        originalPrice: 100.0,
        discount: 45,
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1005&q=80',
    },
    {
        id: '9',
        name: 'Likee',
        category: 'Striped & Line Top',
        price: 87.9,
        originalPrice: 100.0,
        discount: 45,
        image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    },
    {
        id: '10',
        name: 'Kabir',
        category: 'Striped & Line Top',
        price: 87.9,
        originalPrice: 100.0,
        discount: 45,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    },
    {
        id: '11',
        name: 'Giana',
        category: 'Striped & Line Top',
        price: 77.9,
        originalPrice: 90.0,
        discount: 45,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80',
    },
    {
        id: '12',
        name: 'Arafaee',
        category: 'Striped & Line Top',
        price: 87.9,
        originalPrice: 100.0,
        discount: 45,
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1005&q=80',
    },
    {
        id: '13',
        name: 'Khusbir K',
        category: 'Striped & Line Top',
        price: 87.9,
        originalPrice: 100.0,
        discount: 45,
        image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    },
    {
        id: '14',
        name: 'Likee',
        category: 'Striped & Line Top',
        price: 87.9,
        originalPrice: 100.0,
        discount: 45,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    },
    {
        id: '15',
        name: 'Rustrange',
        category: 'Striped & Line Top',
        price: 87.9,
        originalPrice: 100.0,
        discount: 45,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80',
    },
    {
        id: '16',
        name: 'Single',
        category: 'Striped & Line Top',
        price: 87.9,
        originalPrice: 100.0,
        discount: 45,
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1005&q=80',
    },
];

// Dữ liệu sản phẩm tương tự
const similarProducts = [
    {
        id: 's1',
        name: 'La Zoire',
        category: 'Striped & Line Top',
        price: 87.9,
        originalPrice: 100.0,
        discount: 45,
        image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    },
    {
        id: 's2',
        name: 'Roadster',
        category: 'Printed Cotton Blend Cotton T-shirt',
        price: 73.0,
        originalPrice: 90.0,
        discount: 30,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    },
    {
        id: 's3',
        name: 'Kaniroot',
        category: 'Printed Cotton Blend Comfort Tee',
        price: 49.0,
        originalPrice: 70.0,
        discount: 35,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80',
    },
    {
        id: 's4',
        name: 'Henklown',
        category: 'Printed Top',
        price: 32.8,
        originalPrice: 40.0,
        discount: 20,
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1005&q=80',
    },
];

// Danh mục sản phẩm
const categories = [
    { id: 'c1', name: 'Tops (631)', checked: true },
    { id: 'c2', name: 'Dresses (498)', checked: false },
    { id: 'c3', name: 'Pants (150)', checked: false },
    { id: 'c4', name: 'Trousers (145)', checked: false },
    { id: 'c5', name: 'Jeans (176)', checked: false },
    { id: 'c6', name: 'Sweaters (54)', checked: false },
    { id: 'c7', name: 'Leggings (48)', checked: false },
];

// Thương hiệu
const brands = [
    { id: 'b1', name: 'Tops (631)', checked: true },
    { id: 'b2', name: 'Dresses (498)', checked: false },
    { id: 'b3', name: 'Pants (150)', checked: false },
    { id: 'b4', name: 'Trousers (145)', checked: false },
    { id: 'b5', name: 'Jeans (176)', checked: false },
    { id: 'b6', name: 'Sweaters (54)', checked: false },
    { id: 'b7', name: 'Leggings (48)', checked: false },
];

// Khoảng giá
const priceRanges = [
    { id: 'p1', name: '$0.00 to $9.99 (4)', checked: false },
    { id: 'p2', name: '$10.00 to $19.99 (25)', checked: false },
    { id: 'p3', name: '$20.00 to $29.99 (25)', checked: false },
];

// Màu sắc
const colors = [
    { id: 'col1', name: 'White', color: '#FFFFFF', checked: false },
    { id: 'col2', name: 'Blue', color: '#0000FF', checked: false },
    { id: 'col3', name: 'Red', color: '#FF0000', checked: false },
    { id: 'col4', name: 'Black', color: '#000000', checked: false },
    { id: 'col5', name: 'Navy Blue', color: '#000080', checked: false },
];

// Các tùy chọn sắp xếp
const sortOptions = [
    { id: 'sort1', name: "What's New", selected: true },
    { id: 'sort2', name: 'Popularity', selected: false },
    { id: 'sort3', name: 'High to Low', selected: false },
    { id: 'sort4', name: 'Low to High', selected: false },
    { id: 'sort5', name: 'Customer Rating', selected: false },
];

export { productData, similarProducts, categories, brands, priceRanges, colors, sortOptions };
