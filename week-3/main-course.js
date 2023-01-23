import { Product } from "./product.js"; // import product class

export class MainCourse extends Product { // Creates and exports MainCourse class
    constructor(name, price) {
        super(name, price);
    }  
}
