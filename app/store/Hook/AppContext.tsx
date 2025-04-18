import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import useContextLogger from './useContextLogger';

interface AppState {
    products: string[];
    addProduct: (product: string) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<string[]>([]);

    const addProduct = (product: string) => {
        setProducts((prevProducts) => [...prevProducts, product]);
    };

    // Use logger to log changes to products state
    useContextLogger(products, "AppContext");

    return (
        <AppContext.Provider value={{ products, addProduct }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

// import React, { createContext, useContext, useState, ReactNode } from 'react';
//
// // Define the shape of your context state
// interface AppState {
//     // Define your state properties here, e.g., products, user, etc.
//     products: string[];
//     addProduct: (product: string) => void;
// }
//
// // Create a context with a default value
// const AppContext = createContext<AppState | undefined>(undefined);
//
// // Create a provider component
// export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [products, setProducts] = useState<string[]>([]);
//
//     const addProduct = (product: string) => {
//         setProducts((prevProducts) => [...prevProducts, product]);
//     };
//
//     return (
//         <AppContext.Provider value={{ products, addProduct }}>
//             {children}
//         </AppContext.Provider>
//     );
// };
//
// // Create a custom hook to use the AppContext
// export const useAppContext = () => {
//     const context = useContext(AppContext);
//     if (!context) {
//         throw new Error('useAppContext must be used within an AppProvider');
//     }
//     return context;
// };
