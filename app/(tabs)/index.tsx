import React from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { categories, newArrivals, featuredProducts, collections, instagramPosts } from '@/app/shared/data/home.data';
import { styles } from '@/app/shared/styles/home.styles';

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            {/* Banner Section */}
            <View style={styles.banner}>
                <Text style={styles.bannerTitle}>Winter Stock</Text>
                <Text>Summer Collection</Text>
                <TouchableOpacity style={styles.bannerButton}>
                    <Text style={styles.bannerButtonText}>Shop Now</Text>
                </TouchableOpacity>
            </View>

            {/* Categories Grid */}
            <Text style={styles.sectionTitle}>Shop by Category</Text>
            <View style={styles.categoryGrid}>
                {categories.map((category) => (
                    <View key={category.id} style={styles.categoryItem}>
                        <Image source={{ uri: category.image }} style={styles.categoryImage} />
                        <Text style={styles.categoryName}>{category.name}</Text>
                    </View>
                ))}
            </View>

            {/* Best Seller Products */}
            <Text style={styles.sectionTitle}>Best Seller Products</Text>
            <View style={styles.productGrid}>
                {newArrivals.map((product) => (
                    <View key={product.id} style={styles.productCard}>
                        <Image source={{ uri: product.image }} style={styles.productImage} />
                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productPrice}>${product.price}</Text>
                        </View>
                    </View>
                ))}
            </View>

            {/* Featured Products */}
            <Text style={styles.sectionTitle}>Featured Products</Text>
            <View style={styles.productGrid}>
                {featuredProducts.map((product) => (
                    <View key={product.id} style={styles.productCard}>
                        <Image source={{ uri: product.image }} style={styles.productImage} />
                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productPrice}>${product.price}</Text>
                        </View>
                    </View>
                ))}
            </View>

            {/* Collections */}
            <Text style={styles.sectionTitle}>Collections</Text>
            <View style={styles.collectionGrid}>
                {collections.map((collection) => (
                    <View key={collection.id} style={styles.collectionCard}>
                        <Image source={{ uri: collection.image }} style={styles.collectionImage} />
                        <Text style={styles.collectionName}>{collection.name}</Text>
                        <Text style={styles.collectionType}>{collection.type}</Text>
                    </View>
                ))}
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.sectionTitle}>Follow us on Instagram</Text>
                <View style={styles.socialGrid}>
                    {instagramPosts.map((post) => (
                        <Image key={post.id} source={{ uri: post.image }} style={styles.socialImage} />
                    ))}
                </View>

                <Text style={styles.sectionTitle}>Subscribe Newsletter</Text>
                <TextInput
                    style={styles.newsletterInput}
                    placeholder="Enter your email"
                />
                <TouchableOpacity style={styles.subscribeButton}>
                    <Text style={styles.subscribeText}>Subscribe</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

//
// import React from 'react';
// import { ScrollView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { styles } from '../common/styles/home.styles';
//
// const categories = Array(10).fill({});
// const products = Array(8).fill({});
// const socialImages = Array(4).fill({});
//
// export default function HomeScreen() {
//     return (
//         <ScrollView style={styles.container}>
//             {/* Banner Section */}
//             <View style={styles.banner}>
//                 <Text style={styles.bannerTitle}>Winter Stock</Text>
//                 <Text>Summer Collection</Text>
//                 <TouchableOpacity style={styles.bannerButton}>
//                     <Text style={styles.bannerButtonText}>Shop Now</Text>
//                 </TouchableOpacity>
//             </View>
//
//             {/* Categories Grid */}
//             <Text style={styles.sectionTitle}>Shop by Category</Text>
//             <View style={styles.categoryGrid}>
//                 {categories.map((_, index) => (
//                     <View key={index} style={styles.categoryItem} />
//                 ))}
//             </View>
//
//             {/* Best Deals Section */}
//             <View style={styles.bestDealsSection}>
//                 <View>
//                     <Text style={styles.sectionTitle}>Best Collection of Year</Text>
//                     <Text>60% OFF</Text>
//                 </View>
//
//                 <View>
//                     <Text>Always Ethical & Beautiful</Text>
//                     <TouchableOpacity>
//                         <Text>Shop Now</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//
//             {/* Best Seller Products */}
//             <Text style={styles.sectionTitle}>Best Seller Products</Text>
//             <View style={styles.productGrid}>
//                 {products.map((_, index) => (
//                     <View key={index} style={styles.productCard}>
//                         <View style={styles.productImage} />
//                         <View style={styles.productInfo}>
//                             <Text style={styles.productName}>Product Name</Text>
//                             <Text style={styles.productPrice}>$99.99</Text>
//                         </View>
//                     </View>
//                 ))}
//             </View>
//
//             {/* Featured Products */}
//             <Text style={styles.sectionTitle}>Featured Products</Text>
//             <View style={styles.productGrid}>
//                 {products.slice(0, 4).map((_, index) => (
//                     <View key={index} style={styles.productCard}>
//                         <View style={styles.productImage} />
//                         <View style={styles.productInfo}>
//                             <Text style={styles.productName}>Product Name</Text>
//                             <Text style={styles.productPrice}>$99.99</Text>
//                         </View>
//                     </View>
//                 ))}
//             </View>
//
//             {/* Summer Collections */}
//             <Text style={styles.sectionTitle}>Summer Collections</Text>
//             <View style={styles.collectionGrid}>
//                 <View style={styles.collectionCard}>
//                     <Text>Women</Text>
//                 </View>
//                 <View style={styles.collectionCard}>
//                     <Text>Men</Text>
//                 </View>
//             </View>
//
//             {/* Footer */}
//             <View style={styles.footer}>
//                 <Text style={styles.sectionTitle}>Follow us on Instagram</Text>
//                 <View style={styles.socialGrid}>
//                     {socialImages.map((_, index) => (
//                         <View key={index} style={styles.socialImage} />
//                     ))}
//                 </View>
//
//                 <Text style={styles.sectionTitle}>Subscribe Newsletter</Text>
//                 <TextInput
//                     style={styles.newsletterInput}
//                     placeholder="Enter your email"
//                 />
//                 <TouchableOpacity style={styles.subscribeButton}>
//                     <Text style={styles.subscribeText}>Subscribe</Text>
//                 </TouchableOpacity>
//             </View>
//         </ScrollView>
//     );
// }
//
//
// // import { Image, StyleSheet, Platform } from 'react-native';
// //
// // import { HelloWave } from '@/components/HelloWave';
// // import ParallaxScrollView from '@/components/ParallaxScrollView';
// // import { ThemedText } from '@/components/ThemedText';
// // import { ThemedView } from '@/components/ThemedView';
// //
// // export default function HomeScreen() {
// //   return (
// //     <ParallaxScrollView
// //       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
// //       headerImage={
// //         <Image
// //           source={require('@/assets/images/partial-react-logo.png')}
// //           style={styles.reactLogo}
// //         />
// //       }>
// //       <ThemedView style={styles.titleContainer}>
// //         <ThemedText type="title">Welcome!</ThemedText>
// //         <HelloWave />
// //       </ThemedView>
// //       <ThemedView style={styles.stepContainer}>
// //         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
// //         <ThemedText>
// //           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
// //           Press{' '}
// //           <ThemedText type="defaultSemiBold">
// //             {Platform.select({
// //               ios: 'cmd + d',
// //               android: 'cmd + m',
// //               web: 'F12'
// //             })}
// //           </ThemedText>{' '}
// //           to open developer tools.
// //         </ThemedText>
// //       </ThemedView>
// //       <ThemedView style={styles.stepContainer}>
// //         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
// //         <ThemedText>
// //           Tap the Explore tab to learn more about what's included in this starter app.
// //         </ThemedText>
// //       </ThemedView>
// //       <ThemedView style={styles.stepContainer}>
// //         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
// //         <ThemedText>
// //           When you're ready, run{' '}
// //           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
// //           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
// //           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
// //           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
// //         </ThemedText>
// //       </ThemedView>
// //     </ParallaxScrollView>
// //   );
// // }
// //
// // const styles = StyleSheet.create({
// //   titleContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     gap: 8,
// //   },
// //   stepContainer: {
// //     gap: 8,
// //     marginBottom: 8,
// //   },
// //   reactLogo: {
// //     height: 178,
// //     width: 290,
// //     bottom: 0,
// //     left: 0,
// //     position: 'absolute',
// //   },
// // });
