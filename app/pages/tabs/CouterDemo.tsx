
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { increment, decrement, incrementByAmount } from '@/app/store/Slice/counterSlice';
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

export default function CounterDemo() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Redux Counter Demo</ThemedText>
            <ThemedText style={styles.count}>{count}</ThemedText>
            <ThemedView style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => dispatch(decrement())}
                >
                    <ThemedText style={styles.buttonText}>-</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => dispatch(increment())}
                >
                    <ThemedText style={styles.buttonText}>+</ThemedText>
                </TouchableOpacity>
            </ThemedView>
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => dispatch(incrementByAmount(5))}
            >
                <ThemedText style={styles.buttonText}>Add 5</ThemedText>
            </TouchableOpacity>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    count: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        marginHorizontal: 10,
        width: 50,
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        width: 120,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
