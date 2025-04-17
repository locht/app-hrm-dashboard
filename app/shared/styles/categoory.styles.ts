
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    headerSubtitle: {
        fontSize: 18,
        marginBottom: 20,
    },
    shopButton: {
        backgroundColor: '#000',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 5,
    },
    shopButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    categorySection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        backgroundColor: '#fff',
    },
    categoryItem: {
        alignItems: 'center',
    },
    categoryIcon: {
        fontSize: 24,
        marginBottom: 5,
    },
    categoryName: {
        fontSize: 12,
    },
    section: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    productGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    productCard: {
        width: (width - 60) / 2,
        marginBottom: 20,
    },
    productImage: {
        width: '100%',
        aspectRatio: 1,
        backgroundColor: '#f5f5f5',
        marginBottom: 10,
    },
    productName: {
        fontSize: 16,
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 14,
        color: '#666',
    },
    ethicalSection: {
        padding: 40,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
    },
    ethicalTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    leapSection: {
        padding: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    leapTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    leapSubtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
    },
    collectionsGrid: {
        flexDirection: 'row',
        padding: 20,
    },
    collectionCard: {
        flex: 1,
        height: 200,
        margin: 5,
        position: 'relative',
    },
    collectionImage: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f5f5f5',
    },
    collectionOverlay: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    collectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    collectionDiscount: {
        fontSize: 16,
        color: '#fff',
    },
    collectionSubtitle: {
        fontSize: 14,
        color: '#fff',
    },
    instagramSection: {
        padding: 20,
    },
    instagramGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    instagramImage: {
        width: (width - 50) / 4,
        aspectRatio: 1,
        backgroundColor: '#f5f5f5',
        margin: 2,
    },
    newsletter: {
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    subscribeForm: {
        flexDirection: 'row',
        gap: 10,
    },
    emailInput: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    subscribeButton: {
        backgroundColor: '#000',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    subscribeButtonText: {
        color: '#fff',
    },
});
