import React from "react";
import { observer } from "mobx-react-lite";
import { useAppContext } from "@/app/store/Hook/AppContext"; // Adjust the path if needed
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

const FollowingUseContext = observer(() => {
    const { products, addProduct } = useAppContext();

    const addNewProduct = () => {
        const newProduct = `Product ${products.length + 1}`;
        addProduct(newProduct);
    };

    return (
        <ThemedView>
            <ThemedText style={{ fontSize: 18 }}>Product List (Context API)</ThemedText>
            {products.map((product: any, index: any) => (
                <ThemedText key={index}>{product}</ThemedText>
            ))}
            <ThemedText onPress={addNewProduct} style={{ color: "blue" }}>
                Add Product
            </ThemedText>
            <ThemedText>Total Products: {products.length}</ThemedText>
        </ThemedView>
    );
});

export default FollowingUseContext;
