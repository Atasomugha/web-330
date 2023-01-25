/*
================================================
* Title: dessert.js
    Author: Professor Krasso
    Date: 22 January 2023
    Modified By: Anachebe Asomugha
    Description: JavaScript module for WEB 330 Assignment 3.2
================================================    
 */

import { Product } from "./product.js"; // imports product class

export class Dessert extends Product { // Creating and exporting class
    constructor(name, price) {
        super(name, price);
    }
}

