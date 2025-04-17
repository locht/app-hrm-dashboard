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
import { productsStyles } from '../shared/styles/products.styles';
import {
    productData,
    similarProducts,
    categories,
    brands,
    priceRanges,
    colors,
    sortOptions,
} from '../shared/data/products.data';
import { Product, Category, Brand, PriceRange, ColorOption, SortOption } from '../shared/interface/products.interface';

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
        <View style={[productsStyles.productCard, { width: productWidth }]}>
            <View style={productsStyles.productImageContainer}>
                <TouchableOpacity style={productsStyles.wishlistButton}>
                    <Ionicons name='heart-outline' size={20} color='#000' />
                </TouchableOpacity>
                <Image source={{ uri: item.image }} style={productsStyles.productImage} />
            </View>
            <View style={productsStyles.productInfo}>
                <Text style={productsStyles.productName}>{item.name}</Text>
                <Text style={productsStyles.productCategory}>{item.category}</Text>
                <View style={productsStyles.priceContainer}>
                    <Text style={productsStyles.productPrice}>${item.price.toFixed(1)}</Text>
                    <Text style={productsStyles.originalPrice}>${item.originalPrice.toFixed(1)}</Text>
                    <Text style={productsStyles.discountText}>({item.discount}% OFF)</Text>
                </View>
            </View>
        </View>
    );

    const renderSimilarProductItem = ({ item }: ListRenderItemInfo<Product>) => (
        <View style={productsStyles.similarProductCard}>
            <View style={productsStyles.productImageContainer}>
                <TouchableOpacity style={productsStyles.wishlistButton}>
                    <Ionicons name='heart-outline' size={20} color='#000' />
                </TouchableOpacity>
                <Image source={{ uri: item.image }} style={productsStyles.productImage} />
            </View>
            <View style={productsStyles.productInfo}>
                <Text style={productsStyles.productName}>{item.name}</Text>
                <Text style={productsStyles.productCategory}>{item.category}</Text>
                <View style={productsStyles.priceContainer}>
                    <Text style={productsStyles.productPrice}>${item.price.toFixed(1)}</Text>
                    <Text style={productsStyles.originalPrice}>${item.originalPrice.toFixed(1)}</Text>
                    <Text style={productsStyles.discountText}>({item.discount}% OFF)</Text>
                </View>
            </View>
        </View>
    );

    const renderCheckbox = (item: Category | Brand | PriceRange, type: string) => (
        <TouchableOpacity key={item.id} style={productsStyles.checkboxContainer}>
            <View style={[productsStyles.checkbox, item.checked && productsStyles.checkboxChecked]}>
                {item.checked && <Ionicons name='checkmark' size={14} color='#fff' />}
            </View>
            <Text style={productsStyles.checkboxLabel}>{item.name}</Text>
        </TouchableOpacity>
    );

    const renderColorOption = (item: ColorOption) => (
        <TouchableOpacity key={item.id} style={productsStyles.colorOptionContainer}>
            <View style={[productsStyles.colorCircle, { backgroundColor: item.color }]} />
            <Text style={productsStyles.colorName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={productsStyles.container}>
            <StatusBar style='auto' />

            {/* Header */}
            <View style={productsStyles.header}>
                <View style={productsStyles.headerLeft}>
                    <Text style={productsStyles.logo}>AVA</Text>
                    {isMobile && (
                        <TouchableOpacity
                            style={productsStyles.mobileMenuButton}
                            onPress={() => setShowMobileMenu(!showMobileMenu)}
                        >
                            <Ionicons name={showMobileMenu ? 'close-outline' : 'menu-outline'} size={24} color='#000' />
                        </TouchableOpacity>
                    )}
                </View>

                {/* Desktop Navigation */}
                {!isMobile && (
                    <View style={productsStyles.headerCenter}>
                        <TouchableOpacity style={productsStyles.navLink}>
                            <Text style={productsStyles.navLinkText}>Shop</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={productsStyles.navLink}>
                            <Text style={productsStyles.navLinkText}>Men</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={productsStyles.navLink}>
                            <Text style={productsStyles.navLinkText}>Women</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={productsStyles.navLink}>
                            <Text style={productsStyles.navLinkText}>Blog</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={productsStyles.navLink}>
                            <Text style={productsStyles.navLinkText}>Contact</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[productsStyles.navLink, productsStyles.specialSale]}>
                            <Text style={productsStyles.specialSaleText}>SPECIAL SALE</Text>
                        </TouchableOpacity>
                    </View>
                )}

                <View style={productsStyles.headerRight}>
                    {!isMobile && (
                        <View style={productsStyles.searchContainer}>
                            <TextInput
                                style={productsStyles.searchInput}
                                placeholder="Let's find what you want"
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                            />
                            <TouchableOpacity style={productsStyles.searchButton}>
                                <Ionicons name='search' size={20} color='#000' />
                            </TouchableOpacity>
                        </View>
                    )}

                    <TouchableOpacity style={productsStyles.iconButton}>
                        <Ionicons name='heart-outline' size={24} color='#000' />
                    </TouchableOpacity>
                    <TouchableOpacity style={productsStyles.iconButton}>
                        <Ionicons name='cart-outline' size={24} color='#000' />
                        <View style={productsStyles.cartBadge}>
                            <Text style={productsStyles.cartBadgeText}>2</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={productsStyles.iconButton}>
                        <Ionicons name='person-outline' size={24} color='#000' />
                    </TouchableOpacity>

                    {isMobile && (
                        <TouchableOpacity style={productsStyles.iconButton}>
                            <Ionicons name='search' size={24} color='#000' />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            {/* Mobile Menu */}
            {isMobile && showMobileMenu && (
                <View style={productsStyles.mobileMenu}>
                    <TouchableOpacity style={productsStyles.mobileNavLink}>
                        <Text style={productsStyles.mobileNavLinkText}>Shop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productsStyles.mobileNavLink}>
                        <Text style={productsStyles.mobileNavLinkText}>Men</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productsStyles.mobileNavLink}>
                        <Text style={productsStyles.mobileNavLinkText}>Women</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productsStyles.mobileNavLink}>
                        <Text style={productsStyles.mobileNavLinkText}>Blog</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productsStyles.mobileNavLink}>
                        <Text style={productsStyles.mobileNavLinkText}>Contact</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[productsStyles.mobileNavLink, productsStyles.mobileSale]}>
                        <Text style={productsStyles.specialSaleText}>SPECIAL SALE</Text>
                    </TouchableOpacity>

                    <View style={productsStyles.mobileSearchContainer}>
                        <TextInput
                            style={productsStyles.mobileSearchInput}
                            placeholder="Let's find what you want"
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                        <TouchableOpacity style={productsStyles.searchButton}>
                            <Ionicons name='search' size={20} color='#000' />
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {/* Breadcrumb */}
            <View style={productsStyles.breadcrumb}>
                <TouchableOpacity>
                    <Text style={productsStyles.breadcrumbText}>Home</Text>
                </TouchableOpacity>
                <Text style={productsStyles.breadcrumbSeparator}>/</Text>
                <TouchableOpacity>
                    <Text style={productsStyles.breadcrumbText}>Shop</Text>
                </TouchableOpacity>
                <Text style={productsStyles.breadcrumbSeparator}>/</Text>
                <Text style={[productsStyles.breadcrumbText, productsStyles.breadcrumbActive]}>43399 products</Text>
            </View>

            {/* Main Content */}
            <View style={[productsStyles.mainContent, isMobile && productsStyles.mainContentMobile]}>
                {/* Mobile Filter Toggle */}
                {isMobile && (
                    <View style={productsStyles.mobileFilterToggle}>
                        <TouchableOpacity
                            style={productsStyles.filterToggleButton}
                            onPress={() => setShowMobileFilters(!showMobileFilters)}
                        >
                            <Ionicons name='options-outline' size={20} color='#000' />
                            <Text style={productsStyles.filterToggleText}>
                                {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* Sidebar Filters */}
                {(!isMobile || (isMobile && showMobileFilters)) && (
                    <View style={[productsStyles.sidebar, isMobile && productsStyles.sidebarMobile]}>
                        {/* Filter Header */}
                        <View style={productsStyles.filterHeader}>
                            <Text style={productsStyles.filterTitle}>Filters</Text>
                            {isMobile && (
                                <TouchableOpacity onPress={() => setShowMobileFilters(false)}>
                                    <Ionicons name='close-outline' size={24} color='#000' />
                                </TouchableOpacity>
                            )}
                        </View>

                        {/* Categories */}
                        <View style={productsStyles.filterSection}>
                            <Text style={productsStyles.filterSectionTitle}>Categories</Text>
                            {categories.map((item) => renderCheckbox(item, 'category'))}
                        </View>

                        {/* Brand */}
                        <View style={productsStyles.filterSection}>
                            <Text style={productsStyles.filterSectionTitle}>Brand</Text>
                            {brands.map((item) => renderCheckbox(item, 'brand'))}
                        </View>

                        {/* Price */}
                        <View style={productsStyles.filterSection}>
                            <Text style={productsStyles.filterSectionTitle}>Price</Text>
                            {priceRanges.map((item) => renderCheckbox(item, 'price'))}
                        </View>

                        {/* Color */}
                        <View style={[productsStyles.filterSection]}>
                            <Text style={productsStyles.filterSectionTitle}>Color</Text>
                            {colors.map((item) => renderColorOption(item))}
                        </View>
                    </View>
                )}

                {/* Product List */}
                <View style={productsStyles.productListContainer}>
                    {/* Sort Options */}
                    <View style={productsStyles.sortContainer}>
                        <Text style={productsStyles.sortText}>Sort By:</Text>
                        <TouchableOpacity
                            style={productsStyles.sortSelector}
                            onPress={() => setShowSortOptions(!showSortOptions)}
                        >
                            <Text style={productsStyles.selectedSortText}>{selectedSort}</Text>
                            <Ionicons name={showSortOptions ? 'chevron-up' : 'chevron-down'} size={16} color='#000' />
                        </TouchableOpacity>

                        {showSortOptions && (
                            <View style={productsStyles.sortOptionsDropdown}>
                                {sortOptions.map((option) => (
                                    <TouchableOpacity
                                        key={option.id}
                                        style={[
                                            productsStyles.sortOption,
                                            selectedSort === option.name && productsStyles.selectedSortOption,
                                        ]}
                                        onPress={() => {
                                            setSelectedSort(option.name);
                                            setShowSortOptions(false);
                                        }}
                                    >
                                        <Text
                                            style={[
                                                productsStyles.sortOptionText,
                                                selectedSort === option.name && productsStyles.selectedSortOptionText,
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
                        columnWrapperStyle={productsStyles.productRow}
                        scrollEnabled={false}
                    />

                    {/* Load More Button */}
                    <TouchableOpacity style={productsStyles.loadMoreButton}>
                        <Text style={productsStyles.loadMoreButtonText}>LOAD MORE</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Similar Products Section */}
            <View style={productsStyles.similarProductsSection}>
                <View style={productsStyles.sectionHeader}>
                    <Text style={productsStyles.sectionTitle}>Similar Products</Text>
                    <View style={productsStyles.navigationButtons}>
                        <TouchableOpacity style={productsStyles.navButton}>
                            <Ionicons name='arrow-back' size={20} color='#000' />
                        </TouchableOpacity>
                        <TouchableOpacity style={productsStyles.navButton}>
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
                    contentContainerStyle={productsStyles.similarProductsList}
                />
            </View>

            {/* Newsletter Section */}
            <View style={productsStyles.newsletterSection}>
                <Text style={productsStyles.newsletterTitle}>Subscribe Newsletter</Text>
                <Text style={productsStyles.newsletterSubtitle}>& Latest Update of Company</Text>
                <View style={productsStyles.newsletterForm}>
                    <TextInput
                        style={productsStyles.newsletterInput}
                        placeholder='Enter Email Address'
                        value={newsletterEmail}
                        onChangeText={setNewsletterEmail}
                    />
                    <TouchableOpacity style={productsStyles.subscribeButton} onPress={handleSubscribe}>
                        <Text style={productsStyles.subscribeButtonText}>Subscribe</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Footer */}
            <View style={productsStyles.footer}>
                <View style={productsStyles.footerTop}>
                    <View style={productsStyles.footerColumn}>
                        <Text style={productsStyles.footerLogo}>AVA</Text>
                        <Text style={productsStyles.footerText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                        </Text>
                        <Text style={productsStyles.footerText}>info@example.com</Text>
                        <Text style={productsStyles.footerText}>+1 (234) 56789</Text>
                    </View>

                    <View style={productsStyles.footerColumn}>
                        <Text style={productsStyles.footerColumnTitle}>Information</Text>
                        <TouchableOpacity>
                            <Text style={productsStyles.footerLink}>Men</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={productsStyles.footerLink}>Women</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={productsStyles.footerLink}>Kids</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={productsStyles.footerLink}>Home & Living</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={productsStyles.footerColumn}>
                        <Text style={productsStyles.footerColumnTitle}>Explore</Text>
                        <TouchableOpacity>
                            <Text style={productsStyles.footerLink}>Blog</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={productsStyles.footerLink}>Gift Cards</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={productsStyles.footerLink}>Financing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={productsStyles.footerLink}>Reviews</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={productsStyles.footerColumn}>
                        <Text style={productsStyles.footerColumnTitle}>Contact Us</Text>
                        <TouchableOpacity>
                            <Text style={productsStyles.footerLink}>FAQ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={productsStyles.footerLink}>Track Orders</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={productsStyles.footerLink}>Shipping</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={productsStyles.footerLink}>Returns</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={productsStyles.footerColumn}>
                        <Text style={productsStyles.footerColumnTitle}>Support</Text>
                        <TouchableOpacity>
                            <Text style={productsStyles.footerLink}>Help Center</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={productsStyles.footerLink}>News</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={productsStyles.footerLink}>Career</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={productsStyles.footerLink}>Terms of Use</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={productsStyles.footerBottom}>
                    <Text style={productsStyles.copyright}>© 2023, All Rights Reserved</Text>
                    <View style={productsStyles.footerLinks}>
                        <TouchableOpacity>
                            <Text style={productsStyles.footerBottomLink}>Privacy Policy</Text>
                        </TouchableOpacity>
                        <Text style={productsStyles.footerBottomSeparator}>|</Text>
                        <TouchableOpacity>
                            <Text style={productsStyles.footerBottomLink}>Terms & Conditions</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={productsStyles.socialIcons}>
                        <TouchableOpacity style={productsStyles.socialIcon}>
                            <Ionicons name='logo-facebook' size={18} color='#fff' />
                        </TouchableOpacity>
                        <TouchableOpacity style={productsStyles.socialIcon}>
                            <Ionicons name='logo-twitter' size={18} color='#fff' />
                        </TouchableOpacity>
                        <TouchableOpacity style={productsStyles.socialIcon}>
                            <Ionicons name='logo-instagram' size={18} color='#fff' />
                        </TouchableOpacity>
                        <TouchableOpacity style={productsStyles.socialIcon}>
                            <Ionicons name='logo-youtube' size={18} color='#fff' />
                        </TouchableOpacity>
                        <TouchableOpacity style={productsStyles.socialIcon}>
                            <Ionicons name='logo-pinterest' size={18} color='#fff' />
                        </TouchableOpacity>
                        <TouchableOpacity style={productsStyles.socialIcon}>
                            <Ionicons name='logo-linkedin' size={18} color='#fff' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
