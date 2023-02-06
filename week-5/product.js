/*
================================================
* Title: product.js
    Author: Professor Krasso
    Date: 5 February 2023
    Modified By: Anachebe Asomugha
    Description: JavaScript module for WEB 330 Assignment 5.2
================================================    
 */
"use-strict";
export class Product { // Creates and exports Product class
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2);
    }
}