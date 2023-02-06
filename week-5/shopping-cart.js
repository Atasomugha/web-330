/*
================================================
* Title: shopping-cart.js
    Author: Professor Krasso
    Date: 5 February 2023
    Modified By: Anachebe Asomugha
    Description: JavaScript module for WEB 330 Assignment 5.2
================================================    
 */
"use-strict";
// Creates class ShoppingCart
export class ShoppingCart {
    constructor() {
        this.products = [];
    }
    count() { //counts the products
        return this.products.length;
    }
    add(product) { //adds a product
        this.products.push(product);

    }
    *[Symbol.iterator]() {       // creates an iterator
        for(let product of this.products) {
            yield product
        }
    }
}