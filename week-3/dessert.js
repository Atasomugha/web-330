import { Product } from "./product.js"; // imports product class

export class Dessert extends Product { // Creating and exporting class
    constructor(name, price) {
        super(name, price);
    }
}

