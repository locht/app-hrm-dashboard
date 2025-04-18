
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { from, lastValueFrom } from 'rxjs';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
}

interface ProductsState {
    items: Product[];
    categories: string[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
    items: [],
    categories: [],
    loading: false,
    error: null,
};

// // Using standard fetch (Works in Expo)
// export const fetchProducts = createAsyncThunk<Product[]>( // Add return type for clarity
//     'products/fetchProducts',
//     async () => {
//         const response = await fetch('https://fakestoreapi.com/products');
//         if (!response.ok) { // Add basic error handling
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         return data as Product[]; // Type assertion
//     }
// );
// // Using standard fetch for categories (Expo compatible)
// export const fetchCategories = createAsyncThunk<string[]>( // Add return type
//     'products/fetchCategories',
//     async () => {
//         const response = await fetch('https://fakestoreapi.com/products/categories');
//         if (!response.ok) { // Add basic error handling
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         return data as string[]; // Type assertion
//     }
// );

// Using RxJS
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response$ = from(
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
        );
        return await lastValueFrom(response$);
    }
);
export const fetchCategories = createAsyncThunk(
    'products/fetchCategories',
    async () => {
        const response$ = from(
            fetch('https://fakestoreapi.com/products/categories')
                .then(res => res.json())
        );
        return await lastValueFrom(response$);
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch products';
            })
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch categories';
            });
    },
});

export default productsSlice.reducer;
