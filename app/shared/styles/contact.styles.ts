import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 300,
        position: 'relative',
    },
    bannerImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    headerContent: {
        position: 'absolute',
        bottom: 40,
        left: 20,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#fff',
    },
    formSection: {
        padding: 20,
    },
    formTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    form: {
        gap: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 12,
        fontSize: 16,
    },
    textArea: {
        height: 120,
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    locationsSection: {
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    locationCard: {
        width: '48%',
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    locationHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    locationCity: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    companyName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    address: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    location: {
        fontSize: 14,
        color: '#666',
    },
    newsletterSection: {
        padding: 20,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
    },
    newsletterTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    newsletterSubtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    newsletterForm: {
        flexDirection: 'row',
        gap: 10,
        width: '100%',
    },
    newsletterInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    subscribeButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 5,
        justifyContent: 'center',
    },
    subscribeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
