import { Product } from "./product.js"; // Importing product

export class Beverage extends Product { //Creating and exporting class module
    constructor(name, price) {
        super(name, price);
    }
}

