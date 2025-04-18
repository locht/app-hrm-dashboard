
import React, { useEffect } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { fetchProducts, fetchCategories } from '@/app/store/Slice/productsSlice';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function ProductList() {
    const dispatch = useDispatch<AppDispatch>();
    const { items, categories, loading, error } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(fetchProducts()); // RxJS call
        dispatch(fetchCategories()); // RNFetchBlob call
    }, [dispatch]);

    if (loading) {
        return (
            <ThemedView style={styles.centered}>
                <ActivityIndicator size="large" />
            </ThemedView>
        );
    }

    if (error) {
        return (
            <ThemedView style={styles.centered}>
                <ThemedText>{error}</ThemedText>
            </ThemedView>
        );
    }

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.sectionTitle}>Categories (RNFetchBlob):</ThemedText>
            <View style={styles.categoriesContainer}>
                {categories.map((category, index) => (
                    <ThemedText key={index} style={styles.category}>{category}</ThemedText>
                ))}
            </View>

            <ThemedText style={styles.sectionTitle}>Products (RxJS):</ThemedText>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ThemedView style={styles.productItem}>
                        <ThemedText style={styles.title}>{item.title}</ThemedText>
                        <ThemedText style={styles.price}>${item.price}</ThemedText>
                        <ThemedText numberOfLines={2} style={styles.description}>
                            {item.description}
                        </ThemedText>
                    </ThemedView>
                )}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 15,
    },
    category: {
        backgroundColor: '#f0f0f0',
        padding: 8,
        margin: 4,
        borderRadius: 4,
    },
    productItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#999',
    },
});
