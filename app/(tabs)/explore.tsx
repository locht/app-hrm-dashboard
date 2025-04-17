
import React from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from '@/app/shared/styles/categoory.styles';
import { categories, newArrivals, featuredProducts, collections, instagramPosts } from '@/app/shared/data/category.data';

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Winter Stock</Text>
                <Text style={styles.headerSubtitle}>Summer Collection</Text>
                <TouchableOpacity style={styles.shopButton}>
                    <Text style={styles.shopButtonText}>Shop Now</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.categorySection}>
                {categories.map(category => (
                    <View key={category.id} style={styles.categoryItem}>
                        <Text style={styles.categoryIcon}>{category.icon}</Text>
                        <Text style={styles.categoryName}>{category.name}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>New Arrivals</Text>
                <View style={styles.productGrid}>
                    {newArrivals.map(product => (
                        <View key={product.id} style={styles.productCard}>
                            <Image source={{ uri: product.image }} style={styles.productImage} />
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productPrice}>${product.price}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.ethicalSection}>
                <Text style={styles.ethicalTitle}>Always Ethical & Beautiful</Text>
                <TouchableOpacity style={styles.shopButton}>
                    <Text style={styles.shopButtonText}>Shop Now</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.leapSection}>
                <Text style={styles.leapTitle}>WE HAVE TAKEN A BIG LEAP BY</Text>
                <Text style={styles.leapSubtitle}>FOCUSING ON HIGH PROCESS AND PRODUCTS</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Featured Products</Text>
                <View style={styles.productGrid}>
                    {featuredProducts.map(product => (
                        <View key={product.id} style={styles.productCard}>
                            <Image source={{ uri: product.image }}  style={styles.productImage} />
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productPrice}>${product.price}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.collectionsGrid}>
                {collections.map(collection => (
                    <View key={collection.id} style={styles.collectionCard}>
                        <Image source={{ uri: collection.image }} style={styles.collectionImage} />

                        <View style={styles.collectionOverlay}>
                            <Text style={styles.collectionTitle}>{collection.name}</Text>
                            {collection.discount && (
                                <Text style={styles.collectionDiscount}>{collection.discount}</Text>
                            )}
                            {collection.subtitle && (
                                <Text style={styles.collectionSubtitle}>{collection.subtitle}</Text>
                            )}
                        </View>
                    </View>
                ))}
            </View>

            <View style={styles.instagramSection}>
                <Text style={styles.sectionTitle}>Follow us on Instagram</Text>
                <View style={styles.instagramGrid}>
                    {instagramPosts.map(post => (
                        <Image key={post.id} source={{ uri: post.image }} style={styles.instagramImage} />
                    ))}
                </View>
            </View>

            <View style={styles.newsletter}>
                <Text style={styles.sectionTitle}>Subscribe Newsletter</Text>
                <View style={styles.subscribeForm}>
                    <TextInput
                        placeholder="Enter your email"
                        style={styles.emailInput}
                    />
                    <TouchableOpacity style={styles.subscribeButton}>
                        <Text style={styles.subscribeButtonText}>Subscribe</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}


// import { StyleSheet, Image, Platform } from 'react-native';
//
// import { Collapsible } from '@/components/Collapsible';
// import { ExternalLink } from '@/components/ExternalLink';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { IconSymbol } from '@/components/ui/IconSymbol';
//
// export default function TabTwoScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
//       headerImage={
//         <IconSymbol
//           size={310}
//           color="#808080"
//           name="chevron.left.forwardslash.chevron.right"
//           style={styles.headerImage}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Explore</ThemedText>
//       </ThemedView>
//       <ThemedText>This app includes example code to help you get started.</ThemedText>
//       <Collapsible title="File-based routing">
//         <ThemedText>
//           This app has two screens:{' '}
//           <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
//           <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
//         </ThemedText>
//         <ThemedText>
//           The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
//           sets up the tab navigator.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/router/introduction">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Android, iOS, and web support">
//         <ThemedText>
//           You can open this project on Android, iOS, and the web. To open the web version, press{' '}
//           <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
//         </ThemedText>
//       </Collapsible>
//       <Collapsible title="Images">
//         <ThemedText>
//           For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
//           <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
//           different screen densities
//         </ThemedText>
//         <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
//         <ExternalLink href="https://reactnative.dev/docs/images">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Custom fonts">
//         <ThemedText>
//           Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
//           <ThemedText style={{ fontFamily: 'SpaceMono' }}>
//             custom fonts such as this one.
//           </ThemedText>
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Light and dark mode components">
//         <ThemedText>
//           This template has light and dark mode support. The{' '}
//           <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
//           what the user's current color scheme is, and so you can adjust UI colors accordingly.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Animations">
//         <ThemedText>
//           This template includes an example of an animated component. The{' '}
//           <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
//           the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
//           library to create a waving hand animation.
//         </ThemedText>
//         {Platform.select({
//           ios: (
//             <ThemedText>
//               The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
//               component provides a parallax effect for the header image.
//             </ThemedText>
//           ),
//         })}
//       </Collapsible>
//     </ParallaxScrollView>
//   );
// }
//
// const styles = StyleSheet.create({
//   headerImage: {
//     color: '#808080',
//     bottom: -90,
//     left: -35,
//     position: 'absolute',
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
// });
