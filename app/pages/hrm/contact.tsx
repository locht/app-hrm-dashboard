import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Colors} from '@/constants/Colors';
import { useColorScheme } from 'react-native';
import {styles} from '@/app/shared/styles/contact.styles'

export default function ContactScreen() {
    const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme ?? 'light'];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        timeline: '',
        budget: '',
        description: '',
    });

    const [newsletterEmail, setNewsletterEmail] = useState('');

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    const handleSubscribe = () => {
        console.log('Newsletter subscription:', newsletterEmail);
    };

    const officeLocations = [
        {
            city: 'Chennai (India)',
            company: 'AVA',
            address: '277, Green Road, Annannagar',
            location: 'Chennai 600022, Tamil Nadu, India',
        },
        {
            city: 'California (United States)',
            company: 'AVA',
            address: '9453 Miggins Road',
            location: 'La Jolla CA 92037-9166, USA',
        },
        {
            city: 'Sydney (Australia)',
            company: 'AVA',
            address: '23 Julian Place,Sydney, 2159',
            location: 'Australia',
        },
        {
            city: 'Melbourne (Australia)',
            company: 'AVA',
            address: '28 Margie Avenue,Melbourne, 2163',
            location: 'Australia',
        },
    ];

    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                {/* <Image
                    source={require('@/assets/images/contact-banner.jpg')}
                    style={styles.bannerImage}
                />  */}
                <View style={styles.headerContent}>
                    <Text style={styles.headerTitle}>Contact Us</Text>
                    <Text style={styles.headerSubtitle}>
                        It is a long established fact that a reader be distracted.
                    </Text>
                </View>
            </View>

            {/* Contact Form Section */}
            <View style={styles.formSection}>
                <Text style={styles.formTitle}>Let's Talk About Your Project</Text>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        value={formData.name}
                        onChangeText={(text) => setFormData({ ...formData, name: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={formData.email}
                        onChangeText={(text) => setFormData({ ...formData, email: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Company"
                        value={formData.company}
                        onChangeText={(text) => setFormData({ ...formData, company: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="When do you want to start?"
                        value={formData.timeline}
                        onChangeText={(text) => setFormData({ ...formData, timeline: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="What is your budget?"
                        value={formData.budget}
                        onChangeText={(text) => setFormData({ ...formData, budget: text })}
                    />
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Describe"
                        multiline
                        numberOfLines={4}
                        value={formData.description}
                        onChangeText={(text) => setFormData({ ...formData, description: text })}
                    />
                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Office Locations Section */}
            <View style={styles.locationsSection}>
                {officeLocations.map((office, index) => (
                    <View key={index} style={styles.locationCard}>
                        <View style={styles.locationHeader}>
                            <Ionicons name="location-outline" size={24} color={themeColors.text} />
                            <Text style={styles.locationCity}>{office.city}</Text>
                        </View>
                        <Text style={styles.companyName}>{office.company}</Text>
                        <Text style={styles.address}>{office.address}</Text>
                        <Text style={styles.location}>{office.location}</Text>
                    </View>
                ))}
            </View>

            {/* Newsletter Section */}
            <View style={styles.newsletterSection}>
                <Text style={styles.newsletterTitle}>Subscribe Newsletter</Text>
                <Text style={styles.newsletterSubtitle}>& latest Update of Company</Text>
                <View style={styles.newsletterForm}>
                    <TextInput
                        style={styles.newsletterInput}
                        placeholder="Enter Email Address"
                        value={newsletterEmail}
                        onChangeText={setNewsletterEmail}
                    />
                    <TouchableOpacity style={styles.subscribeButton} onPress={handleSubscribe}>
                        <Text style={styles.subscribeButtonText}>Subscribe</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
