
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    banner: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    bannerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bannerButton: {
        backgroundColor: '#000',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    bannerButtonText: {
        color: '#fff',
    },
    categoryGrid: {
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    categoryItem: {
        width: '18%',
        aspectRatio: 1,
        marginBottom: 10,
        alignItems: 'center',
    },
    categoryImage: {
        width: '100%',
        height: '80%',
        borderRadius: 8,
    },
    categoryName: {
        fontSize: 12,
        marginTop: 4,
        textAlign: 'center',
    },
    collectionImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 8,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
    },
    bestDealsSection: {
        padding: 15,
        backgroundColor: '#f8f8f8',
    },
    productGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    productCard: {
        width: '48%',
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    productImage: {
        width: '100%',
        aspectRatio: 1,
        backgroundColor: '#f5f5f5',
    },
    productInfo: {
        padding: 10,
    },
    productName: {
        fontSize: 16,
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 14,
        color: '#666',
    },
    collectionGrid: {
        flexDirection: 'row',
        padding: 15,
    },
    collectionCard: {
        flex: 1,
        marginHorizontal: 5,
        aspectRatio: 0.8,
        backgroundColor: '#f5f5f5',
    },
    footer: {
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    socialGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    socialImage: {
        width: '23%',
        aspectRatio: 1,
        backgroundColor: '#f5f5f5',
    },
    newsletterInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 10,
    },
    subscribeButton: {
        backgroundColor: '#000',
        padding: 15,
        alignItems: 'center',
    },
    subscribeText: {
        color: '#fff',
    },
    collectionName: {},
    collectionType: {}
});
