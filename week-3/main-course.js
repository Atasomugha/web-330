/*
================================================
* Title: main-course.js
    Author: Professor Krasso
    Date: 22 January 2023
    Modified By: Anachebe Asomugha
    Description: JavaScript module for WEB 330 Assignment 3.2
================================================    
 */

import { Product } from "./product.js"; // import product class

export class MainCourse extends Product { // Creates and exports MainCourse class
    constructor(name, price) {
        super(name, price);
    }  
}
