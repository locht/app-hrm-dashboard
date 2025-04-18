import React, { useState } from 'react';
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Platform,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen() {
    const colorScheme = useColorScheme();
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // Here you would implement actual login logic
        console.log('Login with:', { username, password, rememberMe });

        // Navigate to dashboard after login
        router.push('/(tabs)/hrm');
    };

    const themeColors = Colors[colorScheme ?? 'light'];

    return (
        <ThemedView style={styles.container}>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1, width: '100%' }}
            >
                <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps='handled'>
                    <ThemedView style={styles.headerContainer}>
                        <Image source={require('@/assets/images/react-logo.png')} style={styles.logo} />
                        <ThemedText style={styles.title}>HRM Dashboard</ThemedText>
                        <ThemedText style={styles.subtitle}>Sign in to your account</ThemedText>
                    </ThemedView>

                    <ThemedView style={styles.formContainer}>
                        <ThemedView style={styles.inputContainer}>
                            <Ionicons
                                name='person-outline'
                                size={20}
                                color={themeColors.icon}
                                style={styles.inputIcon}
                            />
                            <TextInput
                                style={[styles.input, { color: themeColors.text, borderColor: themeColors.icon }]}
                                placeholder='Username'
                                placeholderTextColor={themeColors.icon}
                                value={username}
                                onChangeText={setUsername}
                                autoCapitalize='none'
                            />
                        </ThemedView>

                        <ThemedView style={styles.inputContainer}>
                            <Ionicons
                                name='lock-closed-outline'
                                size={20}
                                color={themeColors.icon}
                                style={styles.inputIcon}
                            />
                            <TextInput
                                style={[styles.input, { color: themeColors.text, borderColor: themeColors.icon }]}
                                placeholder='Password'
                                placeholderTextColor={themeColors.icon}
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                                <Ionicons
                                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                                    size={20}
                                    color={themeColors.icon}
                                />
                            </TouchableOpacity>
                        </ThemedView>

                        <ThemedView style={styles.optionsRow}>
                            <TouchableOpacity
                                style={styles.checkboxContainer}
                                onPress={() => setRememberMe(!rememberMe)}
                            >
                                <ThemedView
                                    style={[
                                        styles.checkbox,
                                        rememberMe && {
                                            backgroundColor: themeColors.tint,
                                            borderColor: themeColors.tint,
                                        },
                                    ]}
                                >
                                    {rememberMe && <Ionicons name='checkmark' size={14} color='#fff' />}
                                </ThemedView>
                                <ThemedText style={styles.checkboxLabel}>Remember me</ThemedText>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <ThemedText style={[styles.forgotPassword, { color: themeColors.tint }]}>
                                    Forgot password?
                                </ThemedText>
                            </TouchableOpacity>
                        </ThemedView>

                        <TouchableOpacity
                            style={[styles.loginButton, { backgroundColor: themeColors.tint }]}
                            onPress={handleLogin}
                        >
                            <ThemedText style={styles.loginButtonText}>Sign In</ThemedText>
                        </TouchableOpacity>
                    </ThemedView>
                </ScrollView>
            </KeyboardAvoidingView>
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
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center',
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.7,
    },
    formContainer: {
        width: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        position: 'relative',
    },
    inputIcon: {
        position: 'absolute',
        left: 15,
        zIndex: 1,
    },
    input: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 45,
        fontSize: 16,
    },
    eyeIcon: {
        position: 'absolute',
        right: 15,
        zIndex: 1,
    },
    optionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxLabel: {
        fontSize: 14,
    },
    forgotPassword: {
        fontSize: 14,
    },
    loginButton: {
        height: 50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
