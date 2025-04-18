import { makeAutoObservable, reaction } from "mobx";

class ProductStore {
    products: string[] = [];

    constructor() {
        makeAutoObservable(this);

        // Log product changes
        reaction(
            () => this.products.slice(), // Track products array
            (products) => {
                console.log("Products changed:", products);
            }
        );
    }

    addProduct(product: string) {
        this.products.push(product);
    }

    get productCount() {
        return this.products.length;
    }
}

const productStore = new ProductStore();
export default productStore;

// import { makeAutoObservable } from "mobx";
//
// class ProductStore {
//     products: string[] = [];
//
//     constructor() {
//         makeAutoObservable(this);
//     }
//
//     addProduct(product: string) {
//         this.products.push(product);
//     }
//
//     get productCount() {
//         return this.products.length;
//     }
// }
//
// const productStore = new ProductStore();
// export default productStore;
