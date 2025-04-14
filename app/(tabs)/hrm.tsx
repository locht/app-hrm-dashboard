import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function HRMScreen() {
    const router = useRouter();

    // Redirect to login page when this tab is accessed
    useEffect(() => {
        // Redirect to the login page
        router.replace('/hrm/login');
    }, [router]);

    return (
        <ThemedView style={styles.container}>
            <StatusBar style='auto' />
            <ThemedText style={styles.title}>HRM Dashboard</ThemedText>
            <ThemedText>Redirecting to login...</ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});
