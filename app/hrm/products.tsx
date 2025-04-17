import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
    Dimensions,
    ListRenderItemInfo,
    useWindowDimensions,
    Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { styles } from '../common/styles/styles';
import {
    productData,
    similarProducts,
    categories,
    brands,
    priceRanges,
    colors,
    sortOptions,
} from '../common/data/data';
import { Product, Category, Brand, PriceRange, ColorOption, SortOption } from '../common/interface/interface';

export default function ProductsScreen() {
    const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme ?? 'light'];
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSort, setSelectedSort] = useState("What's New");
    const [showSortOptions, setShowSortOptions] = useState(false);
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    // Sử dụng useWindowDimensions để lấy kích thước màn hình theo thời gian thực
    const { width, height } = useWindowDimensions();

    // Xác định các breakpoints cho responsive
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const isDesktop = width >= 1024;

    // Tính toán kích thước sản phẩm dựa trên kích thước màn hình
    const getProductColumns = () => {
        if (isMobile) return 2;
        if (isTablet) return 3;
        return 4;
    };

    const productColumns = getProductColumns();
    const productWidth = width / productColumns - (isMobile ? 16 : 20);

    const handleSubscribe = () => {
        console.log('Newsletter subscription:', newsletterEmail);
        setNewsletterEmail('');
    };

    const renderProductItem = ({ item }: ListRenderItemInfo<Product>) => (
        <View style={[styles.productCard, { width: productWidth }]}>
            <View style={styles.productImageContainer}>
                <TouchableOpacity style={styles.wishlistButton}>
                    <Ionicons name='heart-outline' size={20} color='#000' />
                </TouchableOpacity>
                <Image source={{ uri: item.image }} style={styles.productImage} />
            </View>
            <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productCategory}>{item.category}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.productPrice}>${item.price.toFixed(1)}</Text>
                    <Text style={styles.originalPrice}>${item.originalPrice.toFixed(1)}</Text>
                    <Text style={styles.discountText}>({item.discount}% OFF)</Text>
                </View>
            </View>
        </View>
    );

    const renderSimilarProductItem = ({ item }: ListRenderItemInfo<Product>) => (
        <View style={styles.similarProductCard}>
            <View style={styles.productImageContainer}>
                <TouchableOpacity style={styles.wishlistButton}>
                    <Ionicons name='heart-outline' size={20} color='#000' />
                </TouchableOpacity>
                <Image source={{ uri: item.image }} style={styles.productImage} />
            </View>
            <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productCategory}>{item.category}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.productPrice}>${item.price.toFixed(1)}</Text>
                    <Text style={styles.originalPrice}>${item.originalPrice.toFixed(1)}</Text>
                    <Text style={styles.discountText}>({item.discount}% OFF)</Text>
                </View>
            </View>
        </View>
    );

    const renderCheckbox = (item: Category | Brand | PriceRange, type: string) => (
        <TouchableOpacity key={item.id} style={styles.checkboxContainer}>
            <View style={[styles.checkbox, item.checked && styles.checkboxChecked]}>
                {item.checked && <Ionicons name='checkmark' size={14} color='#fff' />}
            </View>
            <Text style={styles.checkboxLabel}>{item.name}</Text>
        </TouchableOpacity>
    );

    const renderColorOption = (item: ColorOption) => (
        <TouchableOpacity key={item.id} style={styles.colorOptionContainer}>
            <View style={[styles.colorCircle, { backgroundColor: item.color }]} />
            <Text style={styles.colorName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            <StatusBar style='auto' />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.logo}>AVA</Text>
                    {isMobile && (
                        <TouchableOpacity
                            style={styles.mobileMenuButton}
                            onPress={() => setShowMobileMenu(!showMobileMenu)}
                        >
                            <Ionicons name={showMobileMenu ? 'close-outline' : 'menu-outline'} size={24} color='#000' />
                        </TouchableOpacity>
                    )}
                </View>

                {/* Desktop Navigation */}
                {!isMobile && (
                    <View style={styles.headerCenter}>
                        <TouchableOpacity style={styles.navLink}>
                            <Text style={styles.navLinkText}>Shop</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navLink}>
                            <Text style={styles.navLinkText}>Men</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navLink}>
                            <Text style={styles.navLinkText}>Women</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navLink}>
                            <Text style={styles.navLinkText}>Blog</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navLink}>
                            <Text style={styles.navLinkText}>Contact</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.navLink, styles.specialSale]}>
                            <Text style={styles.specialSaleText}>SPECIAL SALE</Text>
                        </TouchableOpacity>
                    </View>
                )}

                <View style={styles.headerRight}>
                    {!isMobile && (
                        <View style={styles.searchContainer}>
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Let's find what you want"
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                            />
                            <TouchableOpacity style={styles.searchButton}>
                                <Ionicons name='search' size={20} color='#000' />
                            </TouchableOpacity>
                        </View>
                    )}

                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name='heart-outline' size={24} color='#000' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name='cart-outline' size={24} color='#000' />
                        <View style={styles.cartBadge}>
                            <Text style={styles.cartBadgeText}>2</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name='person-outline' size={24} color='#000' />
                    </TouchableOpacity>

                    {isMobile && (
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons name='search' size={24} color='#000' />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            {/* Mobile Menu */}
            {isMobile && showMobileMenu && (
                <View style={styles.mobileMenu}>
                    <TouchableOpacity style={styles.mobileNavLink}>
                        <Text style={styles.mobileNavLinkText}>Shop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mobileNavLink}>
                        <Text style={styles.mobileNavLinkText}>Men</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mobileNavLink}>
                        <Text style={styles.mobileNavLinkText}>Women</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mobileNavLink}>
                        <Text style={styles.mobileNavLinkText}>Blog</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mobileNavLink}>
                        <Text style={styles.mobileNavLinkText}>Contact</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.mobileNavLink, styles.mobileSale]}>
                        <Text style={styles.specialSaleText}>SPECIAL SALE</Text>
                    </TouchableOpacity>

                    <View style={styles.mobileSearchContainer}>
                        <TextInput
                            style={styles.mobileSearchInput}
                            placeholder="Let's find what you want"
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                        <TouchableOpacity style={styles.searchButton}>
                            <Ionicons name='search' size={20} color='#000' />
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {/* Breadcrumb */}
            <View style={styles.breadcrumb}>
                <TouchableOpacity>
                    <Text style={styles.breadcrumbText}>Home</Text>
                </TouchableOpacity>
                <Text style={styles.breadcrumbSeparator}>/</Text>
                <TouchableOpacity>
                    <Text style={styles.breadcrumbText}>Shop</Text>
                </TouchableOpacity>
                <Text style={styles.breadcrumbSeparator}>/</Text>
                <Text style={[styles.breadcrumbText, styles.breadcrumbActive]}>43399 products</Text>
            </View>

            {/* Main Content */}
            <View style={[styles.mainContent, isMobile && styles.mainContentMobile]}>
                {/* Mobile Filter Toggle */}
                {isMobile && (
                    <View style={styles.mobileFilterToggle}>
                        <TouchableOpacity
                            style={styles.filterToggleButton}
                            onPress={() => setShowMobileFilters(!showMobileFilters)}
                        >
                            <Ionicons name='options-outline' size={20} color='#000' />
                            <Text style={styles.filterToggleText}>
                                {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* Sidebar Filters */}
                {(!isMobile || (isMobile && showMobileFilters)) && (
                    <View style={[styles.sidebar, isMobile && styles.sidebarMobile]}>
                        {/* Filter Header */}
                        <View style={styles.filterHeader}>
                            <Text style={styles.filterTitle}>Filters</Text>
                            {isMobile && (
                                <TouchableOpacity onPress={() => setShowMobileFilters(false)}>
                                    <Ionicons name='close-outline' size={24} color='#000' />
                                </TouchableOpacity>
                            )}
                        </View>

                        {/* Categories */}
                        <View style={styles.filterSection}>
                            <Text style={styles.filterSectionTitle}>Categories</Text>
                            {categories.map((item) => renderCheckbox(item, 'category'))}
                        </View>

                        {/* Brand */}
                        <View style={styles.filterSection}>
                            <Text style={styles.filterSectionTitle}>Brand</Text>
                            {brands.map((item) => renderCheckbox(item, 'brand'))}
                        </View>

                        {/* Price */}
                        <View style={styles.filterSection}>
                            <Text style={styles.filterSectionTitle}>Price</Text>
                            {priceRanges.map((item) => renderCheckbox(item, 'price'))}
                        </View>

                        {/* Color */}
                        <View style={[styles.filterSection]}>
                            <Text style={styles.filterSectionTitle}>Color</Text>
                            {colors.map((item) => renderColorOption(item))}
                        </View>
                    </View>
                )}

                {/* Product List */}
                <View style={styles.productListContainer}>
                    {/* Sort Options */}
                    <View style={styles.sortContainer}>
                        <Text style={styles.sortText}>Sort By:</Text>
                        <TouchableOpacity
                            style={styles.sortSelector}
                            onPress={() => setShowSortOptions(!showSortOptions)}
                        >
                            <Text style={styles.selectedSortText}>{selectedSort}</Text>
                            <Ionicons name={showSortOptions ? 'chevron-up' : 'chevron-down'} size={16} color='#000' />
                        </TouchableOpacity>

                        {showSortOptions && (
                            <View style={styles.sortOptionsDropdown}>
                                {sortOptions.map((option) => (
                                    <TouchableOpacity
                                        key={option.id}
                                        style={[
                                            styles.sortOption,
                                            selectedSort === option.name && styles.selectedSortOption,
                                        ]}
                                        onPress={() => {
                                            setSelectedSort(option.name);
                                            setShowSortOptions(false);
                                        }}
                                    >
                                        <Text
                                            style={[
                                                styles.sortOptionText,
                                                selectedSort === option.name && styles.selectedSortOptionText,
                                            ]}
                                        >
                                            {option.name}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                    </View>

                    {/* Products Grid */}
                    <FlatList
                        data={productData}
                        renderItem={renderProductItem}
                        keyExtractor={(item) => item.id}
                        numColumns={width < 768 ? 2 : 4}
                        columnWrapperStyle={styles.productRow}
                        scrollEnabled={false}
                    />

                    {/* Load More Button */}
                    <TouchableOpacity style={styles.loadMoreButton}>
                        <Text style={styles.loadMoreButtonText}>LOAD MORE</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Similar Products Section */}
            <View style={styles.similarProductsSection}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Similar Products</Text>
                    <View style={styles.navigationButtons}>
                        <TouchableOpacity style={styles.navButton}>
                            <Ionicons name='arrow-back' size={20} color='#000' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navButton}>
                            <Ionicons name='arrow-forward' size={20} color='#000' />
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList
                    data={similarProducts}
                    renderItem={renderSimilarProductItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.similarProductsList}
                />
            </View>

            {/* Newsletter Section */}
            <View style={styles.newsletterSection}>
                <Text style={styles.newsletterTitle}>Subscribe Newsletter</Text>
                <Text style={styles.newsletterSubtitle}>& Latest Update of Company</Text>
                <View style={styles.newsletterForm}>
                    <TextInput
                        style={styles.newsletterInput}
                        placeholder='Enter Email Address'
                        value={newsletterEmail}
                        onChangeText={setNewsletterEmail}
                    />
                    <TouchableOpacity style={styles.subscribeButton} onPress={handleSubscribe}>
                        <Text style={styles.subscribeButtonText}>Subscribe</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <View style={styles.footerTop}>
                    <View style={styles.footerColumn}>
                        <Text style={styles.footerLogo}>AVA</Text>
                        <Text style={styles.footerText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                        </Text>
                        <Text style={styles.footerText}>info@example.com</Text>
                        <Text style={styles.footerText}>+1 (234) 56789</Text>
                    </View>

                    <View style={styles.footerColumn}>
                        <Text style={styles.footerColumnTitle}>Information</Text>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Men</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Women</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Kids</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Home & Living</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.footerColumn}>
                        <Text style={styles.footerColumnTitle}>Explore</Text>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Blog</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Gift Cards</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Financing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Reviews</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.footerColumn}>
                        <Text style={styles.footerColumnTitle}>Contact Us</Text>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>FAQ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Track Orders</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Shipping</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Returns</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.footerColumn}>
                        <Text style={styles.footerColumnTitle}>Support</Text>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Help Center</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>News</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Career</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Terms of Use</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footerBottom}>
                    <Text style={styles.copyright}>© 2023, All Rights Reserved</Text>
                    <View style={styles.footerLinks}>
                        <TouchableOpacity>
                            <Text style={styles.footerBottomLink}>Privacy Policy</Text>
                        </TouchableOpacity>
                        <Text style={styles.footerBottomSeparator}>|</Text>
                        <TouchableOpacity>
                            <Text style={styles.footerBottomLink}>Terms & Conditions</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.socialIcons}>
                        <TouchableOpacity style={styles.socialIcon}>
                            <Ionicons name='logo-facebook' size={18} color='#fff' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialIcon}>
                            <Ionicons name='logo-twitter' size={18} color='#fff' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialIcon}>
                            <Ionicons name='logo-instagram' size={18} color='#fff' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialIcon}>
                            <Ionicons name='logo-youtube' size={18} color='#fff' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialIcon}>
                            <Ionicons name='logo-pinterest' size={18} color='#fff' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialIcon}>
                            <Ionicons name='logo-linkedin' size={18} color='#fff' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
