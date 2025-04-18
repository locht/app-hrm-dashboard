import React from "react";
import { observer } from "mobx-react-lite";
import productStore from '@/app/store/Mobx/productStore'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

const NewTabUseMobx = observer(() => {
    const addNewProduct = () => {
        const newProduct = `Product ${productStore.productCount + 1}`;
        productStore.addProduct(newProduct);
    };

    return (
        <ThemedView>
            <ThemedText style={{ fontSize: 18 }}>Product List (MobX)</ThemedText>
            {productStore.products.map((product, index) => (
                <ThemedText key={index}>{product}</ThemedText>
            ))}
            <ThemedText onPress={addNewProduct} style={{ color: "blue" }}>
                Add Product
            </ThemedText>
            <ThemedText>Total Products: {productStore.productCount}</ThemedText>
        </ThemedView>
    );
});

export default NewTabUseMobx;
