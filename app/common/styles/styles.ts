import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    mobileMenuButton: {
        padding: 5,
    },
    headerCenter: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    navLink: {
        marginHorizontal: 10,
        paddingVertical: 5,
    },
    navLinkText: {
        fontSize: 16,
    },
    specialSale: {
        backgroundColor: '#000',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 4,
    },
    specialSaleText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    headerRight: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        paddingHorizontal: 10,
    },
    searchInput: {
        width: 150,
        height: 36,
        fontSize: 14,
    },
    searchButton: {
        padding: 5,
    },
    iconButton: {
        marginLeft: 15,
        position: 'relative',
    },
    cartBadge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: '#000',
        borderRadius: 10,
        width: 18,
        height: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartBadgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    breadcrumb: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f9f9f9',
    },
    breadcrumbText: {
        fontSize: 14,
        color: '#666',
    },
    breadcrumbSeparator: {
        marginHorizontal: 5,
        color: '#666',
    },
    breadcrumbActive: {
        color: '#000',
    },
    mainContent: {
        flexDirection: 'row',
        padding: 15,
    },
    mainContentMobile: {
        flexDirection: 'column',
    },
    mobileFilterToggle: {
        padding: 15,
    },
    filterToggleButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterToggleText: {
        marginLeft: 10,
    },
    sidebarMobile: {
        width: '100%',
    },
    filterHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    sidebar: {
        width: '25%',
        paddingRight: 15,
    },
    filterTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    filterSection: {
        marginBottom: 20,
    },
    filterSectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    checkbox: {
        width: 18,
        height: 18,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 3,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxChecked: {
        backgroundColor: '#000',
        borderColor: '#000',
    },
    checkboxLabel: {
        fontSize: 14,
        color: '#333',
    },
    colorOptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    colorCircle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#ddd',
        marginRight: 8,
    },
    colorName: {
        fontSize: 14,
        color: '#333',
    },
    productListContainer: {
        flex: 1,
        width: '75%',
    },
    sortContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        position: 'relative',
    },
    sortText: {
        fontSize: 14,
        marginRight: 10,
    },
    sortSelector: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        padding: 8,
        minWidth: 120,
    },
    selectedSortText: {
        fontSize: 14,
        marginRight: 10,
    },
    sortOptionsDropdown: {
        position: 'absolute',
        top: 40,
        left: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        width: 150,
        zIndex: 10,
        elevation: 5,
    },
    sortOption: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    selectedSortOption: {
        backgroundColor: '#f5f5f5',
    },
    sortOptionText: {
        fontSize: 14,
    },
    selectedSortOptionText: {
        fontWeight: 'bold',
    },
    productRow: {
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    productCard: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 8,
        overflow: 'hidden',
    },
    productImageContainer: {
        position: 'relative',
        height: 200,
        backgroundColor: '#f5f5f5',
    },
    wishlistButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
        backgroundColor: '#fff',
        borderRadius: 15,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    productImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    productInfo: {
        padding: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productCategory: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8,
    },
    originalPrice: {
        fontSize: 14,
        color: '#666',
        textDecorationLine: 'line-through',
        marginRight: 8,
    },
    discountText: {
        fontSize: 14,
        color: '#e53935',
    },
    loadMoreButton: {
        backgroundColor: '#000',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    loadMoreButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    similarProductsSection: {
        padding: 15,
        marginBottom: 30,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    navigationButtons: {
        flexDirection: 'row',
    },
    navButton: {
        width: 36,
        height: 36,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    similarProductsList: {
        paddingBottom: 10,
    },
    similarProductCard: {
        width: 220,
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 8,
        overflow: 'hidden',
    },
    newsletterSection: {
        backgroundColor: '#f5f5f5',
        padding: 30,
        alignItems: 'center',
        marginBottom: 30,
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
        width: '100%',
        maxWidth: 500,
    },
    newsletterInput: {
        flex: 1,
        height: 45,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        marginRight: 10,
    },
    subscribeButton: {
        backgroundColor: '#000',
        paddingHorizontal: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subscribeButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    footer: {
        backgroundColor: '#222',
        padding: 30,
    },
    footerTop: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    footerColumn: {
        width: '18%',
        minWidth: 150,
        marginBottom: 20,
    },
    footerLogo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 15,
    },
    footerText: {
        fontSize: 14,
        color: '#aaa',
        marginBottom: 8,
    },
    footerColumnTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 15,
    },
    footerLink: {
        fontSize: 14,
        color: '#aaa',
        marginBottom: 8,
    },
    footerBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#333',
        flexWrap: 'wrap',
    },
    copyright: {
        fontSize: 14,
        color: '#aaa',
    },
    footerLinks: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerBottomLink: {
        fontSize: 14,
        color: '#aaa',
    },
    footerBottomSeparator: {
        color: '#aaa',
        marginHorizontal: 10,
    },
    socialIcons: {
        flexDirection: 'row',
    },
    socialIcon: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    // Mobile Menu Styles
    mobileMenu: {
        backgroundColor: '#fff',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    mobileNavLink: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    mobileNavLinkText: {
        fontSize: 16,
    },
    mobileSale: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 4,
        marginVertical: 10,
        alignItems: 'center',
    },
    mobileSearchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        paddingHorizontal: 10,
    },
    mobileSearchInput: {
        flex: 1,
        height: 40,
        fontSize: 14,
    },
});

export { styles };
